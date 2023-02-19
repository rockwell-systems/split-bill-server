import { Static, Type } from '@sinclair/typebox'

import { DefaultResponse } from '@/handlers/_shared/defaultResponse'
import { fields } from '@/schemas/fields'

export const USR001ResultSchema = Type.Object({
    user_id: fields.user_id,
    user_name: fields.user_name,
    user_email: fields.user_email,
})

export const USR001ResponseSchema: DefaultResponse<typeof USR001ResultSchema> = {
    result: USR001ResultSchema,
    message: fields.message,
}

export type USR001ResultType = Static<typeof USR001ResultSchema>

export type USR001ResponseType = DefaultResponse<USR001ResultType>
