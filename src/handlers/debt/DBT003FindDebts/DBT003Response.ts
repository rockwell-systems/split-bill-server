import { Static, Type } from '@sinclair/typebox'

import { DefaultResponse } from '@/handlers/_shared/defaultResponse'
import { fields } from '@/schemas/fields'

const DBT003DebtRecordSchema = Type.Object({
    debt_id: fields.debt_id,
    lender_user_id: fields.lender_user_id,
    borrower_user_id: fields.borrower_user_id,
    debt_description: fields.debt_description,
    debt_amount: fields.debt_amount,
    phase1_lender_accepted_date: fields.dateDB,
    phase1_borrower_accepted_date: fields.dateDB,
    phase2_lender_accepted_date: fields.dateDB,
    phase2_borrower_accepted_date: fields.dateDB,
})

const DBT003ResultSchema = Type.Array(DBT003DebtRecordSchema)

export const DBT003ResponseSchema: DefaultResponse<typeof DBT003ResultSchema> = {
    result: DBT003ResultSchema,
    message: fields.message,
}

export type DBT003DebtRecordType = Static<typeof DBT003DebtRecordSchema>

export type DBT003ResultType = Static<typeof DBT003ResultSchema>

export type DBT003ResponseType = DefaultResponse<DBT003ResultType>
