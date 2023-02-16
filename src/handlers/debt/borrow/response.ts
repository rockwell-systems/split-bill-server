import { DefaultResponse } from '@/handlers/_shared/defaultResponse'
import { fields } from '@/schemas/fields'
import { Static, Type } from '@sinclair/typebox'

export const borrwoDebtResult = Type.Null()

export const borrowDebtResponse: DefaultResponse<typeof borrwoDebtResult> = {
    result: borrwoDebtResult,
    message: fields.message,
}

export type BorrowDebtResult = Static<typeof borrwoDebtResult>

export type BorrowDebtResponse = DefaultResponse<BorrowDebtResult>
