import { HttpError } from '@fastify/sensible/lib/httpError'
import { RouteHandlerMethod } from 'fastify'
import { StatusCodes } from 'http-status-codes'
import { GetTaskByTaskIdParams } from './parameter'
import { GetTasksResponse, GetTasksResult } from './response'

export const getTaskByTaskIdHandler: RouteHandlerMethod = async function (request, reply): Promise<GetTasksResponse | HttpError> {
    const params = <GetTaskByTaskIdParams>request.query

    const task = await this.prisma.task.findUnique({
        where: {
            taskId: params.taskId,
        },
    })

    if (!task) {
        return this.httpErrors.notFound()
    }

    const result: GetTasksResult = {
        taskId: task.taskId,
        taskName: task.taskName,
        taskColor: task.taskColor,
        taskStatus: task.taskStatus,
    }
    const response: GetTasksResponse = {
        result: result,
    }

    reply.status(StatusCodes.OK)

    return response
}
