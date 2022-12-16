import { RouteHandlerMethod } from 'fastify'
import { StatusCodes } from 'http-status-codes'
import { DeleteTaskByTaskIdParams } from './parameter'
import { DeleteTaskByTaskIdResult, DeleteTaskByTaskIdResponse } from './response'

export const deleteTaskByTaskIdHandler: RouteHandlerMethod = async function (request, reply): Promise<DeleteTaskByTaskIdResponse> {
    const params = <DeleteTaskByTaskIdParams>request.query

    await this.prisma.task.delete({
        where: {
            taskId: params.taskId,
        },
    })

    const result: DeleteTaskByTaskIdResult = null

    const response: DeleteTaskByTaskIdResponse = {
        result: result,
    }

    reply.status(StatusCodes.NO_CONTENT)

    return response
}
