import { domain } from '@/domains/domains'
import { Static, Type } from '@sinclair/typebox'
import { DefaultResponse } from '../../shared/defaultResponse'

export const getTasksByTaskIdResult = Type.Object({
    taskId: domain.taskId,
    tasktTitle: domain.taskTitle,
    tasktDescription: domain.taskDescription,
    taskColor: domain.taskColor,
    taskStatus: domain.taskStatus,
})
export const getTasksByTaskIdResponse: DefaultResponse<typeof getTasksByTaskIdResult> = {
    result: getTasksByTaskIdResult,
}

export type GetTasksResult = Static<typeof getTasksByTaskIdResult>
export type GetTasksResponse = DefaultResponse<GetTasksResult>
