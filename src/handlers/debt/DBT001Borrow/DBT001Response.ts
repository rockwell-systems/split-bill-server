import { Static, Type } from '@sinclair/typebox'

import { DefaultResponse } from '@/handlers/_shared/defaultResponse'
import { fields } from '@/schemas/fields'

export const DBT001ResultSchema = Type.Null()

export const DBT001ResponseSchema: DefaultResponse<typeof DBT001ResultSchema> = {
    result: DBT001ResultSchema,
    message: fields.message,
}

export type DBT001ResultType = Static<typeof DBT001ResultSchema>

export type DBT001ResponseType = DefaultResponse<DBT001ResultType>
