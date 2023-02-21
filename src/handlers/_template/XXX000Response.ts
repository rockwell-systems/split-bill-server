import { Static, Type } from '@sinclair/typebox'

import { DefaultResponse } from '@/handlers/_shared/defaultResponse'
import { fields } from '@/schemas/fields'

export const XXX000ResultSchema = Type.Null()

export const XXX000ResponseSchema: DefaultResponse<typeof XXX000ResultSchema> = {
    result: XXX000ResultSchema,
    message: fields.message,
}

export type XXX000ResultType = Static<typeof XXX000ResultSchema>

export type XXX000ResponseType = DefaultResponse<XXX000ResultType>
