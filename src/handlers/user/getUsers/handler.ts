import { RouteHanderResult } from '@/handlers/_shared/defaultResponse'
import { FLAG } from '@prisma/client'
import { RouteHandlerMethod } from 'fastify'
import { StatusCodes } from 'http-status-codes'
import { GetUsersResult, GetUsersResponse } from './response'

export const getUsersHandler: RouteHandlerMethod = async function (request, reply): RouteHanderResult<GetUsersResponse> {
    // find all users
    const userList = await this.prisma.user.findMany({
        where: {
            is_email_verified: FLAG.YES,
        },
    })

    // map users to result
    const result: GetUsersResult = userList.map((x) => {
        return {
            user_id: x.user_id,
            user_name: x.user_name,
            user_email: x.user_email,
        }
    })

    // response
    const response: GetUsersResponse = {
        result: result,
        message: '',
    }

    // 200 OK
    reply.status(StatusCodes.OK)

    return response
}
