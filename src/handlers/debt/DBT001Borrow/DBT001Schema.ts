import { FastifySchema } from 'fastify'

import { DBT001RequestSchema } from './DBT001Request'
import { DBT001ResponseSchema } from './DBT001Response'

const description = `
# borrow money
`

export const DBT001Schema: FastifySchema = {
    summary: `borrow money`,
    tags: ['Debt'],
    description: description,
    body: DBT001RequestSchema,
    response: {
        201: DBT001ResponseSchema,
    },
}
