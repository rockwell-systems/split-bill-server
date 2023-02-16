import { fields } from '@/schemas/fields'
import { Static, Type } from '@sinclair/typebox'

export const borrowDebtRequest = Type.Object({
    lender_user_id: fields.user_id,
    borrower_user_id: fields.user_id,
    debt_description: fields.debt_description,
    debt_amount: fields.debt_amount,
})

export type BorrowDebtRequest = Static<typeof borrowDebtRequest>
