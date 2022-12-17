import { domainOptional } from '@/domains/domains'
import { Static, Type } from '@sinclair/typebox'

export const getTasksQuery = Type.Object({
    taskId: domainOptional.taskId,
    taskName: domainOptional.taskName,
    taskColor: domainOptional.taskColor,
    taskStatus: domainOptional.taskStatus,
})

export type GetTasksQuery = Static<typeof getTasksQuery>
