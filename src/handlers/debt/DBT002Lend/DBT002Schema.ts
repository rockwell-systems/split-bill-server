import { FastifySchema } from 'fastify'

import { DBT002RequestSchema } from './DBT002Request'
import { DBT002ResponseSchema } from './DBT002Response'

const description = `
# lend money
`

export const DBT002Schema: FastifySchema = {
    summary: `lend money`,
    tags: ['Debt'],
    description: description,
    body: DBT002RequestSchema,
    response: {
        201: DBT002ResponseSchema,
    },
}
