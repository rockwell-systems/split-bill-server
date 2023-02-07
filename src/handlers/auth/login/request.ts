import { field } from '@/schemas/fields'
import { Static, Type } from '@sinclair/typebox'

export const loginRequest = Type.Object({
    userId: field.userId,
    password: Type.String(),
})

export type LoginRequest = Static<typeof loginRequest>