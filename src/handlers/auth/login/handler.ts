import { RouteHandlerMethod } from 'fastify'
import { StatusCodes } from 'http-status-codes'
import { LoginRequest } from './request'
import { LoginResponse, LoginResult } from './response'
import { HttpError } from '@fastify/sensible/lib/httpError'
import { compareSync } from 'bcrypt'

export const createProductHandler: RouteHandlerMethod = async function (request, reply): Promise<LoginResponse | HttpError> {
    const body = request.body as LoginRequest
    const errMessage = 'User id or password is invalid.'

    const user = await this.prisma.user.findUnique({
        where: {
            userId: body.userId,
        },
    })

    if (!user) {
        return this.httpErrors.unauthorized(errMessage)
    }

    if (compareSync(body.password, user.hash) == false) {
        return this.httpErrors.unauthorized(errMessage)
    }

    const result: LoginResult = null

    const response: LoginResponse = {
        result: result,
    }

    reply.status(StatusCodes.OK)

    return response
}
