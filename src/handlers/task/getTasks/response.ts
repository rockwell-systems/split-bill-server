import { domain } from '@/src/domains/domains'
import { Static, Type } from '@sinclair/typebox'
import { DefaultResponse } from '../../shared/defaultResponse'

export const getTasksResult = Type.Array(
    Type.Object({
        taskId: domain.taskId,
        taskName: domain.taskName,
        taskColor: domain.taskColor,
        taskStatus: domain.taskStatus,
    })
)
export const getTasksResponse: DefaultResponse<typeof getTasksResult> = {
    result: getTasksResult,
}

export type GetTasksResult = Static<typeof getTasksResult>
export type GetTasksResponse = DefaultResponse<GetTasksResult>
