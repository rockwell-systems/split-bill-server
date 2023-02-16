import { SYS_CONSTANTS } from '@/constants/systemConstants'
import { RouteHanderResult } from '@/handlers/_shared/defaultResponse'
import { dbUtils } from '@/utils/db'
import { mathUtils } from '@/utils/math'
import { FLAG } from '@prisma/client'
import { genSaltSync, hashSync } from 'bcrypt'
import { RouteHandlerMethod } from 'fastify'
import { addMinutes } from 'date-fns'
import { StatusCodes } from 'http-status-codes'
import { CreateUserRequest } from './request'
import { CreateUserResult, CreateUserResponse } from './response'
import { emailUtils } from '@/utils/email'

export const createUserHandler: RouteHandlerMethod = async function (request, reply): RouteHanderResult<CreateUserResponse> {
    const body = request.body as CreateUserRequest

    // find user with email
    const userWithSameEmail = await this.prisma.user.findUnique({
        where: {
            user_email: body.user_email,
        },
    })

    // if user exists and email is already verified
    if (userWithSameEmail && userWithSameEmail.is_email_verified === FLAG.YES) {
        // throw error
        return this.httpErrors.badRequest('Email already exists.')
    }

    const newUserId = dbUtils.generateId()
    const otp = mathUtils.generateRandom(6)
    const salt = genSaltSync(SYS_CONSTANTS.SALT_ROUNDS)
    const hash = hashSync(body.password, salt)

    const operations = []

    // if user exists and email is not verified yet
    if (userWithSameEmail) {
        // delete old otp
        const deleteOtp = this.prisma.one_time_password.delete({
            where: {
                user_id: userWithSameEmail.user_id,
            },
        })
        operations.push(deleteOtp)

        // delete existing user by email
        const deleteUser = this.prisma.user.delete({
            where: {
                user_email: userWithSameEmail.user_email,
            },
        })
        operations.push(deleteUser)
    }

    // create new user
    operations.push(
        this.prisma.user.create({
            data: {
                user_id: newUserId,
                user_email: body.user_email,
                user_name: body.user_name,
                is_email_verified: FLAG.NO,
                salt: salt,
                hash: hash,
            },
        })
    )

    // create opt
    operations.push(
        this.prisma.one_time_password.create({
            data: {
                otp_id: dbUtils.generateId(),
                user_id: newUserId,
                otp: otp,
                valid_to: addMinutes(new Date(), 10),
            },
        })
    )

    // execute transaction
    await this.prisma.$transaction(operations)

    // find newly inserted user
    const newUser = await this.prisma.user.findUnique({
        where: {
            user_id: newUserId,
        },
    })

    // exception case
    if (!newUser) {
        throw this.httpErrors.internalServerError('User insert failed.')
    }

    // send otp to verify email
    await emailUtils.sendOtpEmail(newUser.user_name, newUser.user_email, otp)

    // result
    const result: CreateUserResult = {
        user_id: newUser.user_id,
        user_name: newUser.user_name,
        user_email: newUser.user_email,
    }

    // response
    const response: CreateUserResponse = {
        result: result,
        message: 'We just sent a one-time-password to your email. Check your inbox including spam folders.',
    }

    // 201 created
    reply.status(StatusCodes.CREATED)

    return response
}
