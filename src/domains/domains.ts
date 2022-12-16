import { TaskStatus } from '@prisma/client'
import { Static, Type } from '@sinclair/typebox'

export const domain = {
    taskId: Type.String({ minLength: 12, maxLength: 12 }),
    taskName: Type.String({ minLength: 1, maxLength: 100 }),
    taskColor: Type.RegEx(new RegExp('^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$'), {
        examples: ['#00ff00', '#ff00ff'],
    }),
    taskStatus: Type.Enum(TaskStatus),
}

export const domainOptional = {
    taskId: Type.Optional(domain.taskId),
    taskName: Type.Optional(domain.taskName),
    taskColor: Type.Optional(domain.taskColor),
    taskStatus: Type.Optional(domain.taskStatus),
}
