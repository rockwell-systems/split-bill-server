import { Static, Type } from '@sinclair/typebox'

import { DefaultResponse } from '@/handlers/_shared/defaultResponse'
import { fields } from '@/schemas/fields'

export const USR002ResultSchema = Type.Null()

export const USR002ResponseSchema: DefaultResponse<typeof USR002ResultSchema> = {
    result: USR002ResultSchema,
    message: fields.message,
}

export type USR002ResultType = Static<typeof USR002ResultSchema>

export type USR002ResponseType = DefaultResponse<USR002ResultType>
