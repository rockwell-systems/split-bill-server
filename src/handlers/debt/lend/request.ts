import { fields } from '@/schemas/fields'
import { Static, Type } from '@sinclair/typebox'

export const lendDebtRequest = Type.Object({
    lender_user_id: fields.user_id,
    borrower_user_ids: Type.Array(fields.user_id),
    debt_description: fields.debt_description,
    debt_amount: fields.debt_amount,
})

export type LendDebtRequest = Static<typeof lendDebtRequest>
