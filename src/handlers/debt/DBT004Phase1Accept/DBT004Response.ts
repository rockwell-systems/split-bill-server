import { Static, Type } from '@sinclair/typebox'

import { DefaultResponse } from '@/handlers/_shared/defaultResponse'
import { fields } from '@/schemas/fields'

export const DBT004ResultSchema = Type.Null()

export const DBT004ResponseSchema: DefaultResponse<typeof DBT004ResultSchema> = {
    result: DBT004ResultSchema,
    message: fields.message,
}

export type DBT004ResultType = Static<typeof DBT004ResultSchema>

export type DBT004ResponseType = DefaultResponse<DBT004ResultType>
