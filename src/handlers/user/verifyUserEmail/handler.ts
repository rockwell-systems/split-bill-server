import { RouteHanderResult } from '@/handlers/_shared/defaultResponse'
import { dbUtils } from '@/utils/db'
import { FLAG } from '@prisma/client'
import { RouteHandlerMethod } from 'fastify'
import { StatusCodes } from 'http-status-codes'
import { VerifyUserEmailRequest } from './request'
import { VerifyUserEmailResult, VerifyUserEmailResponse } from './response'

export const verifyUserEmailHandler: RouteHandlerMethod = async function (request, reply): RouteHanderResult<VerifyUserEmailResponse> {
    const body = request.body as VerifyUserEmailRequest

    // get system date
    const systemDate = await dbUtils.getSysDate(this.prisma)

    // find otp with user id
    const targetOtp = await this.prisma.one_time_password.findFirst({
        where: {
            user_id: body.user_id,
            otp: body.otp,
            valid_to: {
                gte: systemDate,
            },
            user: {
                is_email_verified: FLAG.NO,
            },
        },
    })

    // if otp - user matching is not found
    if (!targetOtp) {
        return this.httpErrors.badRequest('Otp is invalid or expired.')
    }

    // update user
    await this.prisma.user.update({
        data: {
            is_email_verified: FLAG.YES,
            updated_at: systemDate,
        },
        where: {
            user_id: body.user_id,
        },
    })

    // result
    const result: VerifyUserEmailResult = null

    // response
    const response: VerifyUserEmailResponse = {
        result: result,
        message: 'Email has successfully verified.',
    }

    // 201 created
    reply.status(StatusCodes.CREATED)

    return response
}
