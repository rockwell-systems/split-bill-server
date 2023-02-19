import { Static, Type } from '@sinclair/typebox'

import { DefaultResponse } from '@/handlers/_shared/defaultResponse'
import { fields } from '@/schemas/fields'

export const DBT002ResultSchema = Type.Null()

export const DBT002ResponseSchema: DefaultResponse<typeof DBT002ResultSchema> = {
    result: DBT002ResultSchema,
    message: fields.message,
}

export type DBT002ResultType = Static<typeof DBT002ResultSchema>

export type DBT002ResponseType = DefaultResponse<DBT002ResultType>
