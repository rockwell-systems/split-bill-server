import { Static, Type } from '@sinclair/typebox'
import { DefaultResponse } from '../../shared/defaultResponse'

export const deleteTasksByTaskIdResult = Type.Unsafe()
export const deleteTasksByTaskIdResponse: DefaultResponse<typeof deleteTasksByTaskIdResult> = {
    result: deleteTasksByTaskIdResult,
}

export type DeleteTaskByTaskIdResult = Static<typeof deleteTasksByTaskIdResult>
export type DeleteTaskByTaskIdResponse = DefaultResponse<DeleteTaskByTaskIdResult>
