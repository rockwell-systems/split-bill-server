import { FLAG } from '@prisma/client'
import { RouteHandlerMethod } from 'fastify'
import { StatusCodes } from 'http-status-codes'

import { RouteHanderResult } from '@/handlers/_shared/defaultResponse'

import { USR003ResponseType, USR003ResultType } from './USR003Response'

export const USR003Handler: RouteHandlerMethod = async function (request, reply): RouteHanderResult<USR003ResponseType> {
    // find all users
    const userList = await this.prisma.user.findMany({
        where: {
            is_email_verified: FLAG.YES,
        },
    })

    // map users to result
    const result: USR003ResultType = userList.map((x) => {
        return {
            user_id: x.user_id,
            user_name: x.user_name,
            user_email: x.user_email,
        }
    })

    // response
    const response: USR003ResponseType = {
        result: result,
        message: '',
    }

    // 200 OK
    reply.status(StatusCodes.OK)

    return response
}
