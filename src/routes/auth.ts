import { FastifyInstance } from 'fastify'
import fs from 'fastify-plugin'

import { ATH001Handler } from '@/handlers/auth/ATH001Login/ATH001Handler'
import { ATH001Schema } from '@/handlers/auth/ATH001Login/ATH001Schema'
import { ATH002Handler } from '@/handlers/auth/ATH002Logout/ATH002Handler'
import { ATH002Schema } from '@/handlers/auth/ATH002Logout/ATH002Schema'

const rootRoute = '/auth'

// Router plugin
export default fs(async function (server: FastifyInstance) {
    // login
    server.post(`${rootRoute}/login`, { schema: ATH001Schema }, ATH001Handler)

    // logout
    server.post(`${rootRoute}/logout`, { schema: ATH002Schema }, ATH002Handler)
})
