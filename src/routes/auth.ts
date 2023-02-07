import { FastifyInstance } from 'fastify'
import fs from 'fastify-plugin'
import { loginSchema } from '@/handlers/auth/login/schema'
import { loginHandler } from '@/handlers/auth/login/handler'

const rootRoute = '/auth'

// Router plugin
export default fs(async function (server: FastifyInstance) {
    // login
    server.post(`${rootRoute}/login`, { schema: loginSchema }, loginHandler)
})
