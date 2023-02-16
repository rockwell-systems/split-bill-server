import { DEBT_STATUS, FLAG } from '@prisma/client'
import { Type } from '@sinclair/typebox'

const sharedFields = {
    id: Type.String({ minLength: 12, maxLength: 12 }),
    name50: Type.String({ minLength: 2, maxLength: 50 }),
    email: Type.String({ format: 'email' }),
    password: Type.RegEx(/^(?=.*[0-9])(?=.*[a-z]).{8,32}$/),
    description: Type.String({ minLength: 1, maxLength: 500 }),
    amount: Type.Number({ minimum: 1 }),
    date: Type.String({ format: 'date' }),
    flag: Type.Enum(FLAG),
    message: Type.String(),
    otp: Type.String({ minLength: 6, maxLength: 6 }),
}

export const fields = {
    // user
    user_id: sharedFields.id,
    user_name: sharedFields.name50,
    user_email: sharedFields.email,
    is_email_verified: sharedFields.flag,
    // debt
    debt_id: sharedFields.id,
    lender_user_id: sharedFields.id,
    borrower_user_id: sharedFields.id,
    debt_description: sharedFields.description,
    debt_amount: sharedFields.amount,
    debt_status: Type.Enum(DEBT_STATUS),
    lender_accepted_date: sharedFields.date,
    lender_declined_date: sharedFields.date,
    borrower_accepted_date: sharedFields.date,
    borrower_declined_date: sharedFields.date,
    // other
    message: sharedFields.message,
    otp: sharedFields.otp,
    password: sharedFields.password,
}
