import { HttpError } from '@fastify/sensible/lib/httpError'
import { FLAG } from '@prisma/client'
import { compareSync } from 'bcrypt'
import { RouteHandlerMethod } from 'fastify'
import { StatusCodes } from 'http-status-codes'

import { JWTPayload } from '@/handlers/_shared/model/JWTPayload'

import { ATH001RequestType } from './ATH001Request'
import { ATH001ResponseType, ATH001ResultType } from './ATH001Response'

export const ATH001Handler: RouteHandlerMethod = async function (request, reply): Promise<ATH001ResponseType | HttpError> {
    const body = request.body as ATH001RequestType
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

    const result: ATH001ResultType = null

    const response: ATH001ResponseType = {
        result: result,
    }

    return response
}
