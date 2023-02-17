import { FastifyInstance } from 'fastify'
import fs from 'fastify-plugin'
import { borrowDebtSchema } from '@/handlers/debt/borrow/schema'
import { borrowDebtHandler } from '@/handlers/debt/borrow/handler'
import { lendDebtSchema } from '@/handlers/debt/lend/schema'
import { lendDebtHandler } from '@/handlers/debt/lend/handler'

const rootRoute = '/debt'

// Router plugin
export default fs(async function (server: FastifyInstance) {
    // borrow money
    server.route({
        method: 'POST',
        url: `${rootRoute}/borrow`,
        preHandler: server.auth([server.verify]),
        schema: borrowDebtSchema,
        handler: borrowDebtHandler,
    })

    // lend money
    server.route({
        method: 'POST',
        url: `${rootRoute}/lend`,
        preHandler: server.auth([server.verify]),
        schema: lendDebtSchema,
        handler: lendDebtHandler,
    })
})
