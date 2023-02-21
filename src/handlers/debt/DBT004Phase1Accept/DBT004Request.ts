import { Static, Type } from '@sinclair/typebox'

import { fields } from '@/schemas/fields'

export const DBT004RequestSchema = Type.Object({
    debt_id: fields.debt_id,
})

export type DBT004RequestType = Static<typeof DBT004RequestSchema>
