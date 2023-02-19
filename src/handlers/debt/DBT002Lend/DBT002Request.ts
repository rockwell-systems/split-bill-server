import { Static, Type } from '@sinclair/typebox'

import { fields } from '@/schemas/fields'

export const DBT002RequestSchema = Type.Object({
    lender_user_id: fields.user_id,
    borrower_user_ids: Type.Array(fields.user_id),
    debt_description: fields.debt_description,
    debt_amount: fields.debt_amount,
})

export type DBT002RequestType = Static<typeof DBT002RequestSchema>
