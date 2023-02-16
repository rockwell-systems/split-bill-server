import { DefaultResponse } from '@/handlers/_shared/defaultResponse'
import { fields } from '@/schemas/fields'
import { Static, Type } from '@sinclair/typebox'

export const getUsersResult = Type.Array(
    Type.Object({
        user_id: fields.user_id,
        user_name: fields.user_name,
        user_email: fields.user_email,
    })
)

export const getUsersResponse: DefaultResponse<typeof getUsersResult> = {
    result: getUsersResult,
    message: fields.message,
}

export type GetUsersResult = Static<typeof getUsersResult>

export type GetUsersResponse = DefaultResponse<GetUsersResult>
