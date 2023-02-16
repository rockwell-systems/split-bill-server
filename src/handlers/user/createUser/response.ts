import { DefaultResponse } from '@/handlers/_shared/defaultResponse'
import { fields } from '@/schemas/fields'
import { Static, Type } from '@sinclair/typebox'

export const createUserResult = Type.Object({
    user_id: fields.user_id,
    user_name: fields.user_name,
    user_email: fields.user_email,
})

export const createUserResponse: DefaultResponse<typeof createUserResult> = {
    result: createUserResult,
    message: fields.message,
}

export type CreateUserResult = Static<typeof createUserResult>

export type CreateUserResponse = DefaultResponse<CreateUserResult>
