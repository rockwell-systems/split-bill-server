import { FastifySchema } from 'fastify'

import { DBT003QuerySchema } from './DBT003Query'
import { DBT003ResponseSchema } from './DBT003Response'

const description = `
# find debts
`

export const DBT003Schema: FastifySchema = {
    summary: `find debts`,
    tags: ['Debt'],
    description: description,
    querystring: DBT003QuerySchema,
    response: {
        200: DBT003ResponseSchema,
    },
}
