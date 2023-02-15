import { field } from '@/schemas/fields'
import { Static, Type } from '@sinclair/typebox'

export const createUserRequest = Type.Object({
    user_name: field.user_name,
    user_email: field.user_email,
    password: field.password,
})

export type CreateUserRequest = Static<typeof createUserRequest>
