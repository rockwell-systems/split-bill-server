import { FastifySchema } from 'fastify'
import { createUserRequest } from './request'
import { createUserResponse } from './response'

const description = `
# create a new user
`

export const createUserSchema: FastifySchema = {
    summary: `create a new user`,
    tags: ['user'],
    description: description,
    body: createUserRequest,
    response: {
        201: createUserResponse,
    },
}
