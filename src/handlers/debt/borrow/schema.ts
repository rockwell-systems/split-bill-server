import { FastifySchema } from 'fastify'
import { borrowDebtRequest } from './request'
import { borrowDebtResponse } from './response'

const description = `
# borrow money
`

export const borrowDebtSchema: FastifySchema = {
    summary: `borrow money`,
    tags: ['Debt'],
    description: description,
    body: borrowDebtRequest,
    response: {
        201: borrowDebtResponse,
    },
}
