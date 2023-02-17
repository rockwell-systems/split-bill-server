import { DefaultResponse } from '@/handlers/_shared/defaultResponse'
import { fields } from '@/schemas/fields'
import { Static, Type } from '@sinclair/typebox'

export const lendDebtResult = Type.Null()

export const lendDebtResponse: DefaultResponse<typeof lendDebtResult> = {
    result: lendDebtResult,
    message: fields.message,
}

export type LendDebtResult = Static<typeof lendDebtResult>

export type LendDebtResponse = DefaultResponse<LendDebtResult>
