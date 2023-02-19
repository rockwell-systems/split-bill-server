import { FastifyInstance } from 'fastify'
import fs from 'fastify-plugin'

import { DBT001Handler } from '@/handlers/debt/DBT001Borrow/DBT001Handler'
import { DBT001Schema } from '@/handlers/debt/DBT001Borrow/DBT001Schema'
import { DBT002Handler } from '@/handlers/debt/DBT002Lend/DBT002Handler'
import { DBT002Schema } from '@/handlers/debt/DBT002Lend/DBT002Schema'

const rootRoute = '/debt'

// Router plugin
export default fs(async function (server: FastifyInstance) {
    // borrow money
    server.route({
        method: 'POST',
        url: `${rootRoute}/borrow`,
        preHandler: server.auth([server.verify]),
        schema: DBT001Schema,
        handler: DBT001Handler,
    })

    // lend money
    server.route({
        method: 'POST',
        url: `${rootRoute}/lend`,
        preHandler: server.auth([server.verify]),
        schema: DBT002Schema,
        handler: DBT002Handler,
    })
})
