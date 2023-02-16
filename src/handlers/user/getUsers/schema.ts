import { FastifySchema } from 'fastify'
import { getUsersResponse } from './response'

const description = `
# get users
`

export const getUsersSchema: FastifySchema = {
    summary: `get usres`,
    tags: ['User'],
    description: description,
    response: {
        200: getUsersResponse,
    },
}
