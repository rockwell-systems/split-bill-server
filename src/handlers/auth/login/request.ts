import { fields } from '@/schemas/fields'
import { Static, Type } from '@sinclair/typebox'

export const loginRequest = Type.Object({
    user_email: fields.user_email,
    password: fields.password,
})

export type LoginRequest = Static<typeof loginRequest>
