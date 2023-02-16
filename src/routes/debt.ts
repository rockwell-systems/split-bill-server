import { FastifyInstance } from 'fastify'
import fs from 'fastify-plugin'
import { borrowDebtSchema } from '@/handlers/debt/borrow/schema'
import { borrowDebtHandler } from '@/handlers/debt/borrow/handler'

const rootRoute = '/debt'

// Router plugin
export default fs(async function (server: FastifyInstance) {
    // sign up a new user
    server.route({
        method: 'POST',
        url: `${rootRoute}/borrow`,
        preHandler: server.auth([server.verify]),
        schema: borrowDebtSchema,
        handler: borrowDebtHandler,
    })
})
