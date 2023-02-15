import { DEBT_STATUS, FLAG } from '@prisma/client'
import { Type } from '@sinclair/typebox'

const sharedField = {
    id: Type.String({ minLength: 12, maxLength: 12 }),
    name50: Type.String({ minLength: 2, maxLength: 50 }),
    email: Type.String({ format: 'email' }),
    password: Type.RegEx(/^(?=.*[0-9])(?=.*[a-z]).{8,32}$/),
    description: Type.String({ minLength: 1, maxLength: 500 }),
    amount: Type.Number({ minimum: 1 }),
    date: Type.String({ format: 'date' }),
    flag: Type.Enum(FLAG),
}

export const field = {
    // user
    user_id: sharedField.id,
    user_name: sharedField.name50,
    user_email: sharedField.email,
    is_email_verified: sharedField.flag,
    // debt
    debt_id: sharedField.id,
    lender_user_id: sharedField.id,
    borrower_user_id: sharedField.id,
    debt_description: sharedField.description,
    debt_amount: sharedField.amount,
    debt_status: Type.Enum(DEBT_STATUS),
    lender_accepted_date: sharedField.date,
    lender_declined_date: sharedField.date,
    borrower_accepted_date: sharedField.date,
    borrower_declined_date: sharedField.date,
    // other
    password: sharedField.password,
}
