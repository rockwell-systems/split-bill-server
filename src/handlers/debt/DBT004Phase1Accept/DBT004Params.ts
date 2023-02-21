import { Static, Type } from '@sinclair/typebox'

import { fields } from '@/schemas/fields'

export const DBT004ParamsSchema = Type.Object({
    debt_id: fields.debt_id,
})

export type DBT004ParamsType = Static<typeof DBT004ParamsSchema>
