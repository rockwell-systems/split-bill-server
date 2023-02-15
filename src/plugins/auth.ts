import { FastifyInstance, FastifyPluginOptions } from 'fastify'
import fs from 'fastify-plugin'
import fastifyAuth, { FastifyAuthFunction } from '@fastify/auth'
import { SYS_CONSTANTS } from '@/constants/systemConstants'

declare module 'fastify' {
    interface FastifyInstance {
        verify: FastifyAuthFunction
    }
}

// auth function factory
const authFactory = (): FastifyAuthFunction => {
    const authFunction: FastifyAuthFunction = function (request, _reply, done: CallableFunction) {
        try {
            const jwtString = request.cookies[SYS_CONSTANTS.JWT_COOKIE_KEY] ?? ''
            this.jwt.verify(jwtString)
        } catch (error) {
            done(error)
        } finally {
            done()
        }
    }
    return authFunction
}

const verify: FastifyAuthFunction = authFactory()

export default fs(async function (server: FastifyInstance, options: FastifyPluginOptions, done: CallableFunction) {
    server.decorate('verify', verify)
    server.register(fastifyAuth, options)
    done()
})
