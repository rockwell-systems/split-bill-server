import { FastifySchema } from 'fastify'
import { verifyUserEmailRequest } from './request'
import { verifyUserEmailResponse } from './response'

const description = `
# verify user email
`

export const verifyUserEmailSchema: FastifySchema = {
    summary: `verify user email`,
    tags: ['User'],
    description: description,
    body: verifyUserEmailRequest,
    response: {
        201: verifyUserEmailResponse,
    },
}
