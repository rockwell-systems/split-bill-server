import { RouteHandlerMethod } from 'fastify'
import { StatusCodes } from 'http-status-codes'
import { LoginRequest } from './request'
import { LoginResponse, LoginResult } from './response'
import { compareSync } from 'bcrypt'
import { HttpError } from '@fastify/sensible/lib/httpError'
import { JWTPayload } from '@/handlers/_shared/model/JWTPayload'
import { FLAG } from '@prisma/client'

export const loginHandler: RouteHandlerMethod = async function (request, reply): Promise<LoginResponse | HttpError> {
    const body = request.body as LoginRequest
    const errMessage = 'Email or password is invalid.'

    const user = await this.prisma.user.findUnique({
        where: {
            user_email: body.user_email,
        },
    })

    if (!user || user.is_email_verified === FLAG.NO) {
        return this.httpErrors.unauthorized(errMessage)
    }

    if (compareSync(body.password, user.hash) == false) {
        return this.httpErrors.unauthorized(errMessage)
    }

    const payload: JWTPayload = {
        user_id: user.user_id,
        user_name: user.user_name,
        user_email: user.user_email,
    }

    const jwt = this.jwt.sign(payload)

    reply.setCookie(`jwt`, jwt, {
        sameSite: true,
        maxAge: 2 * 3600 * 1000,
        httpOnly: true,
        path: '/',
    })

    reply.status(StatusCodes.OK)

    const result: LoginResult = null

    const response: LoginResponse = {
        result: result,
    }

    return response
}
