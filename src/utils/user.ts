import { SYS_CONSTANTS } from '@/constants/systemConstants'
import { FastifyRequest } from 'fastify'
import { JWTPayload } from '@/handlers/_shared/model/JWTPayload'

export const userUtils = {
    getCurrentUser: (request: FastifyRequest): JWTPayload => {
        const jwt = request.cookies[SYS_CONSTANTS.JWT_COOKIE_KEY] as string
        const [, payload] = jwt.split('.')
        const payloadBuffer = Buffer.from(payload, 'base64')
        const payloadJSON = JSON.parse(payloadBuffer.toString('ascii')) as JWTPayload
        return payloadJSON
    },
}
