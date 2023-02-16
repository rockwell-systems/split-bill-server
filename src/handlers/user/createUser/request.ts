import { fields } from '@/schemas/fields'
import { Static, Type } from '@sinclair/typebox'

export const createUserRequest = Type.Object({
    user_name: fields.user_name,
    user_email: fields.user_email,
    password: fields.password,
})

export type CreateUserRequest = Static<typeof createUserRequest>
