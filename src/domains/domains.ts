import { TaskStatus } from '@prisma/client'
import { Type } from '@sinclair/typebox'

const sharedDomain = {
    id: Type.String({ minLength: 12, maxLength: 12 }),
}

export const domain = {
    // User
    userId: sharedDomain.id,
    userName: Type.String({ minLength: 1, maxLength: 100 }),
    // Task
    taskId: sharedDomain.id,
    taskTitle: Type.String({ minLength: 1, maxLength: 100 }),
    taskDescription: Type.String({ minLength: 1, maxLength: 500 }),
    taskColor: Type.RegEx(new RegExp('^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$'), {
        examples: ['#00ff00', '#ff00ff'],
    }),
    taskStatus: Type.Enum(TaskStatus),
}

export const domainOptional: typeof domain = {
    // User
    userId: Type.Optional(domain.userId),
    userName: Type.Optional(domain.userName),
    // Task
    taskId: Type.Optional(domain.taskId),
    taskTitle: Type.Optional(domain.taskTitle),
    taskDescription: Type.Optional(domain.taskDescription),
    taskColor: Type.Optional(domain.taskColor),
    taskStatus: Type.Optional(domain.taskStatus),
}
