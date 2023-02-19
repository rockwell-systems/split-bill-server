import { FastifySchema } from 'fastify'

import { USR003ResponseSchema } from './USR003Response'

const description = `
# get users
`

export const USR003Schema: FastifySchema = {
    summary: `get users`,
    tags: ['User'],
    description: description,
    response: {
        200: USR003ResponseSchema,
    },
}
