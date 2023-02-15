import { DefaultResponse } from '@/handlers/_shared/defaultResponse'
import { field } from '@/schemas/fields'
import { Static, Type } from '@sinclair/typebox'

export const createUserResult = Type.Object({
    user_id: field.user_id,
    user_name: field.user_name,
    user_email: field.user_email,
})

export const createUserResponse: DefaultResponse<typeof createUserResult> = {
    result: createUserResult,
    message: Type.String(),
}

export type CreateUserResult = Static<typeof createUserResult>

export type CreateUserResponse = DefaultResponse<CreateUserResult>
