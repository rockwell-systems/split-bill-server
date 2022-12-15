import { FastifySchema } from 'fastify'
import { deleteTaskByTaskIdParams } from './parameter'
import { deleteTasksByTaskIdResponse } from './response'

const description = `
# Delete Task by taskId
You can use some markdown syntaxs like header, lists and text formattings.
It might be nice to describe your api overivew here.
`

export const deleteTaskByTaskIdSchema: FastifySchema = {
    summary: `delete tasks by taskId`,
    tags: ['Task'],
    description: description,
    params: deleteTaskByTaskIdParams,
    response: {
        200: deleteTasksByTaskIdResponse,
    },
}
