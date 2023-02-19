import { Static, Type } from '@sinclair/typebox'

import { fields } from '@/schemas/fields'

export const DBT001RequestSchema = Type.Object({
    lender_user_id: fields.user_id,
    borrower_user_id: fields.user_id,
    debt_description: fields.debt_description,
    debt_amount: fields.debt_amount,
})

export type DBT001RequestType = Static<typeof DBT001RequestSchema>
