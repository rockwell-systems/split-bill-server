import { Type } from '@sinclair/typebox'

import { taskStatus } from '@/constants/enum'

// common schemas
export const common_idSchema = Type.Number({ minimum: 1 })

// task model specific schemas
export const task_taskSchema = Type.String({ minLength: 1, maxLength: 100 })
export const task_colorSchema = Type.RegEx(new RegExp("^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$"), { examples: ['#00ff00', '#ff00ff'] })
export const task_statusSchema = Type.Enum(taskStatus)