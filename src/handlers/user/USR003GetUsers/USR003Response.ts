import { Static, Type } from '@sinclair/typebox'

import { DefaultResponse } from '@/handlers/_shared/defaultResponse'
import { fields } from '@/schemas/fields'

export const USR003ResultSchema = Type.Array(
    Type.Object({
        user_id: fields.user_id,
        user_name: fields.user_name,
        user_email: fields.user_email,
    })
)

export const USR003ResponseSchema: DefaultResponse<typeof USR003ResultSchema> = {
    result: USR003ResultSchema,
    message: fields.message,
}

export type USR003ResultType = Static<typeof USR003ResultSchema>

export type USR003ResponseType = DefaultResponse<USR003ResultType>
