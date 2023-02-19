import { Static, Type } from '@sinclair/typebox'

import { fields } from '@/schemas/fields'

export const DBT003QuerySchema = Type.Object({
    lender_user_ids: Type.Optional(Type.Array(fields.lender_user_id)),
    borrower_user_ids: Type.Optional(Type.Array(fields.borrower_user_id)),
    is_phase1_lender_accepted: fields.boolean,
    is_phase1_borrower_accepted: fields.boolean,
    is_phase2_lender_accepted: fields.boolean,
    is_phase2_borrower_accepted: fields.boolean,
})

export type DBT003QueryType = Static<typeof DBT003QuerySchema>
