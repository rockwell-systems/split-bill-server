import { FastifyInstance } from 'fastify'
import fs from 'fastify-plugin'

import { DBT001Handler } from '@/handlers/debt/DBT001Borrow/DBT001Handler'
import { DBT001Schema } from '@/handlers/debt/DBT001Borrow/DBT001Schema'
import { DBT002Handler } from '@/handlers/debt/DBT002Lend/DBT002Handler'
import { DBT002Schema } from '@/handlers/debt/DBT002Lend/DBT002Schema'
import { DBT003Handler } from '@/handlers/debt/DBT003FindDebts/DBT003Handler'
import { DBT003Schema } from '@/handlers/debt/DBT003FindDebts/DBT003Schema'

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

    // find debts
    server.route({
        method: 'GET',
        url: `${rootRoute}`,
        preHandler: server.auth([server.verify]),
        schema: DBT003Schema,
        handler: DBT003Handler,
    })
})
