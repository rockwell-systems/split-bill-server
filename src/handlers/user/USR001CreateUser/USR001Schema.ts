import { FastifySchema } from 'fastify'

import { USR001RequestSchema } from './USR001Request'
import { USR001ResponseSchema } from './USR001Response'

const description = `
# create a new user
`

export const USR001Schema: FastifySchema = {
    summary: `create a new user`,
    tags: ['User'],
    description: description,
    body: USR001RequestSchema,
    response: {
        201: USR001ResponseSchema,
    },
}
