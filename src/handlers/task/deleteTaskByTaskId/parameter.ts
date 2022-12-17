import { domainOptional } from '@/domains/domains'
import { Static, Type } from '@sinclair/typebox'

export const deleteTaskByTaskIdParams = Type.Object({
    taskId: domainOptional.taskId,
})

export type DeleteTaskByTaskIdParams = Static<typeof deleteTaskByTaskIdParams>
