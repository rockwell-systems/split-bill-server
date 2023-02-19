import { FLAG } from '@prisma/client'
import { RouteHandlerMethod } from 'fastify'
import { StatusCodes } from 'http-status-codes'

import { RouteHanderResult } from '@/handlers/_shared/defaultResponse'
import { dbUtils } from '@/utils/db'

import { USR002RequestType } from './USR002Request'
import { USR002ResponseType, USR002ResultType } from './USR002Response'

export const USR002Handler: RouteHandlerMethod = async function (request, reply): RouteHanderResult<USR002ResponseType> {
    const body = request.body as USR002RequestType

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
    const result: USR002ResultType = null

    // response
    const response: USR002ResponseType = {
        result: result,
        message: 'Email has successfully verified.',
    }

    // 201 created
    reply.status(StatusCodes.CREATED)

    return response
}
