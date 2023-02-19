import { FastifySchema } from 'fastify'

import { USR002RequestSchema } from './USR002Request'
import { USR002ResponseSchema } from './USR002Response'

const description = `
# verify user email
`

export const USR002Schema: FastifySchema = {
    summary: `verify user email`,
    tags: ['User'],
    description: description,
    body: USR002RequestSchema,
    response: {
        201: USR002ResponseSchema,
    },
}
