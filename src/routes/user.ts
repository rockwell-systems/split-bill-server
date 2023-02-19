import { FastifyInstance } from 'fastify'
import fs from 'fastify-plugin'

import { USR001Handler } from '@/handlers/user/USR001CreateUser/USR001Handler'
import { USR001Schema } from '@/handlers/user/USR001CreateUser/USR001Schema'
import { USR002Handler } from '@/handlers/user/USR002VerifyUserEmail/USR002Handler'
import { USR002Schema } from '@/handlers/user/USR002VerifyUserEmail/USR002Schema'
import { USR003Handler } from '@/handlers/user/USR003GetUsers/USR003Handler'
import { USR003Schema } from '@/handlers/user/USR003GetUsers/USR003Schema'

const rootRoute = '/user'

// Router plugin
export default fs(async function (server: FastifyInstance) {
    // sign up a new user
    server.route({
        method: 'POST',
        url: `${rootRoute}`,
        schema: USR001Schema,
        handler: USR001Handler,
    })

    // verify
    server.route({
        method: 'POST',
        url: `${rootRoute}/otp`,
        schema: USR002Schema,
        handler: USR002Handler,
    })

    // get users
    server.route({
        method: 'GET',
        url: `${rootRoute}`,
        preHandler: server.auth([server.verify]),
        schema: USR003Schema,
        handler: USR003Handler,
    })
})
