import { FastifySchema } from 'fastify'
import { getTasksQuery } from './query'
import { getTasksResponse } from './response'

const description = `
# Get Tasks
You can use some markdown syntaxs like header, lists and text formattings.
It might be nice to describe your api overivew here.
`

export const getTaskSchema: FastifySchema = {
    summary: `get tasks by filter`,
    tags: ['Task'],
    description: description,
    querystring: getTasksQuery,
    response: {
        200: getTasksResponse,
    },
}
