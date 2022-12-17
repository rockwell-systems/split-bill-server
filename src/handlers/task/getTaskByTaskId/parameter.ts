import { domainOptional } from '@/domains/domains'
import { Static, Type } from '@sinclair/typebox'

export const getTaskByTaskIdParams = Type.Object({
    taskId: domainOptional.taskId,
})

export type GetTaskByTaskIdParams = Static<typeof getTaskByTaskIdParams>
