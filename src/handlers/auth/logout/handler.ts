import { RouteHandlerMethod } from 'fastify'
import { StatusCodes } from 'http-status-codes'
import { LogoutResponse, LogoutResult } from './response'
import { HttpError } from '@fastify/sensible/lib/httpError'
import { SYS_CONSTANTS } from '@/constants/systemConstants'

export const logoutHandler: RouteHandlerMethod = async function (request, reply): Promise<LogoutResponse | HttpError> {
    reply.clearCookie(SYS_CONSTANTS.JWT_COOKIE_KEY, { path: '/' })
    reply.status(StatusCodes.OK)

    const result: LogoutResult = null
    const response: LogoutResponse = {
        result: result,
    }

    return response
}
