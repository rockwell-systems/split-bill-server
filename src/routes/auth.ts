import { FastifyInstance } from 'fastify'
import fs from 'fastify-plugin'
import { loginSchema } from '@/handlers/auth/login/schema'
import { loginHandler } from '@/handlers/auth/login/handler'
import { logoutSchema } from '@/handlers/auth/logout/schema'
import { logoutHandler } from '@/handlers/auth/logout/handler'
const rootRoute = '/auth'

// Router plugin
export default fs(async function (server: FastifyInstance) {
    // login
    server.post(`${rootRoute}/login`, { schema: loginSchema }, loginHandler)

    // logout
    server.post(`${rootRoute}/logout`, { schema: logoutSchema }, logoutHandler)
})
