import { FastifyInstance } from 'fastify'
import fs from 'fastify-plugin'
import { createUserSchema } from '@/handlers/user/createUser/schema'
import { createUserHandler } from '@/handlers/user/createUser/handler'

const rootRoute = '/user'

// Router plugin
export default fs(async function (server: FastifyInstance) {
    // create a new product
    server.route({
        method: 'POST',
        url: `${rootRoute}`,
        preHandler: server.auth([server.verify]),
        schema: createUserSchema,
        handler: createUserHandler,
    })
})
