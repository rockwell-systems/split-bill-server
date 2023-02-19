import { HttpError } from '@fastify/sensible/lib/httpError'
import { RouteHandlerMethod } from 'fastify'
import { StatusCodes } from 'http-status-codes'

import { SYS_CONSTANTS } from '@/constants/systemConstants'

import { ATH002ResponseType, ATH002ResultType } from './ATH002Response'

export const ATH002Handler: RouteHandlerMethod = async function (request, reply): Promise<ATH002ResponseType | HttpError> {
    reply.clearCookie(SYS_CONSTANTS.JWT_COOKIE_KEY, { path: '/' })
    reply.status(StatusCodes.OK)

    const result: ATH002ResultType = null
    const response: ATH002ResponseType = {
        result: result,
    }

    return response
}
