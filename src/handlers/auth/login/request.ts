import { field } from '@/schemas/fields'
import { Static, Type } from '@sinclair/typebox'

export const loginRequest = Type.Object({
    user_email: field.user_email,
    password: Type.String(),
})

export type LoginRequest = Static<typeof loginRequest>
