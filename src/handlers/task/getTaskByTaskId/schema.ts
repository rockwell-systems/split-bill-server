import { FastifySchema } from 'fastify'
import { getTaskByTaskIdParams } from './parameter'
import { getTasksByTaskIdResponse } from './response'

const description = `
# Get Task by taskId
You can use some markdown syntaxs like header, lists and text formattings.
It might be nice to describe your api overivew here.
`

export const getTaskByTaskIdSchema: FastifySchema = {
    summary: `get tasks by taskId`,
    tags: ['Task'],
    description: description,
    params: getTaskByTaskIdParams,
    response: {
        200: getTasksByTaskIdResponse,
    },
}
