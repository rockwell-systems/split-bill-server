import { DefaultResponse } from '@/handlers/_shared/defaultResponse'
import { fields } from '@/schemas/fields'
import { Static, Type } from '@sinclair/typebox'

export const borrowDebtResult = Type.Null()

export const borrowDebtResponse: DefaultResponse<typeof borrowDebtResult> = {
    result: borrowDebtResult,
    message: fields.message,
}

export type BorrowDebtResult = Static<typeof borrowDebtResult>

export type BorrowDebtResponse = DefaultResponse<BorrowDebtResult>
