/* eslint-disable @typescript-eslint/no-unused-vars */
import { Prisma } from '@prisma/client'
import { RouteHandlerMethod } from 'fastify'
import { StatusCodes } from 'http-status-codes'

import { RouteHanderResult } from '@/handlers/_shared/defaultResponse'
import { userUtils } from '@/utils/user'

import { XXX000ParamsType } from './XXX000Parameter'
import { XXX000QueryType } from './XXX000Query'
import { XXX000RequestType } from './XXX000Request'
import { XXX000ResponseType, XXX000ResultType } from './XXX000Response'

export const XXX000Handler: RouteHandlerMethod = async function (request, reply): RouteHanderResult<XXX000ResponseType> {
    const params = request.params as XXX000ParamsType
    const query = request.query as XXX000QueryType
    const body = request.body as XXX000RequestType
    const userInfo = userUtils.getCurrentUser(request)

    // do business logic

    // result
    const result: XXX000ResultType = null

    // response
    const response: XXX000ResponseType = {
        result: result,
        message: 'Success.',
    }

    // 200 OK
    reply.status(StatusCodes.OK)

    return response
}
