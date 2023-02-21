import { FastifySchema } from 'fastify'

import { DBT004ParamsSchema } from './DBT004Params'
import { DBT004ResponseSchema } from './DBT004Response'

const description = `
# Phase1: accept the borrow/lend request
`

export const DBT004Schema: FastifySchema = {
    summary: `phase1 accept`,
    tags: ['Debt'],
    description: description,
    params: DBT004ParamsSchema,
    response: {
        201: DBT004ResponseSchema,
    },
}
