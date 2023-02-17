import { FastifySchema } from 'fastify'
import { lendDebtRequest } from './request'
import { lendDebtResponse } from './response'

const description = `
# lend money
`

export const lendDebtSchema: FastifySchema = {
    summary: `lend money`,
    tags: ['Debt'],
    description: description,
    body: lendDebtRequest,
    response: {
        201: lendDebtResponse,
    },
}
