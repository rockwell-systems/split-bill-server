import { domain } from '@/domains/domains'
import { Static, Type } from '@sinclair/typebox'
import { DefaultResponse } from '@/handlers/shared/defaultResponse'

export const getTasksResult = Type.Array(
    Type.Object({
        taskId: domain.taskId,
        taskTitle: domain.taskTitle,
        taskDescription: domain.taskDescription,
        taskColor: domain.taskColor,
        taskStatus: domain.taskStatus,
    })
)
export const getTasksResponse: DefaultResponse<typeof getTasksResult> = {
    result: getTasksResult,
}

export type GetTasksResult = Static<typeof getTasksResult>
export type GetTasksResponse = DefaultResponse<GetTasksResult>
