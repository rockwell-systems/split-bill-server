import { FastifyReply, FastifyRequest, RouteHandlerMethod } from 'fastify'
import { GetTaskByTaskIdParams } from './parameter'
import { GetTasksResponse, GetTasksResult } from './response'

export const getTaskByTaskIdHandler: RouteHandlerMethod = async function (request: FastifyRequest, reply: FastifyReply) {
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

    return response
}
