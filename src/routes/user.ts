import { FastifyInstance } from 'fastify'
import fs from 'fastify-plugin'
import { createUserSchema } from '@/handlers/user/createUser/schema'
import { createUserHandler } from '@/handlers/user/createUser/handler'
import { verifyUserEmailSchema } from '@/handlers/user/verifyUserEmail/schema'
import { verifyUserEmailHandler } from '@/handlers/user/verifyUserEmail/handler'
import { getUsersSchema } from '@/handlers/user/getUsers/schema'
import { getUsersHandler } from '@/handlers/user/getUsers/handler'

const rootRoute = '/user'

// Router plugin
export default fs(async function (server: FastifyInstance) {
    // sign up a new user
    server.route({
        method: 'POST',
        url: `${rootRoute}`,
        schema: createUserSchema,
        handler: createUserHandler,
    })

    // verify
    server.route({
        method: 'POST',
        url: `${rootRoute}/otp`,
        schema: verifyUserEmailSchema,
        handler: verifyUserEmailHandler,
    })

    // get users
    server.route({
        method: 'GET',
        url: `${rootRoute}`,
        preHandler: server.auth([server.verify]),
        schema: getUsersSchema,
        handler: getUsersHandler,
    })
})
