import { FastifySchema } from 'fastify'

import { XXX000ParamsSchema } from './XXX000Parameter'
import { XXX000QuerySchema } from './XXX000Query'
import { XXX000RequestSchema } from './XXX000Request'
import { XXX000ResponseSchema } from './XXX000Response'

const description = `
# description
`

export const XXX000Schema: FastifySchema = {
    summary: `summary`,
    tags: ['tag'],
    description: description,
    params: XXX000ParamsSchema,
    querystring: XXX000QuerySchema,
    body: XXX000RequestSchema,
    response: {
        200: XXX000ResponseSchema,
    },
}
