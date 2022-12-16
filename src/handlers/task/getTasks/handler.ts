import { RouteHandlerMethod } from 'fastify'
import { StatusCodes } from 'http-status-codes'
import { GetTasksQuery } from './query'
import { GetTasksResponse, GetTasksResult } from './response'

export const getTaskHandler: RouteHandlerMethod = async function (request, reply): Promise<GetTasksResponse> {
    const query = <GetTasksQuery>request.query
    const tasks = await this.prisma.task.findMany({
        where: {
            taskId: query.taskId,
            taskName: {
                contains: query.taskName,
            },
            taskColor: query.taskColor,
            taskStatus: query.taskStatus,
        },
    })

    const result: GetTasksResult = tasks.map((x) => {
        return {
            taskId: x.taskId,
            taskName: x.taskName,
            taskColor: x.taskName,
            taskStatus: x.taskStatus,
        }
    })

    const response: GetTasksResponse = {
        result: result,
    }

    reply.status(StatusCodes.OK)

    return response
}
