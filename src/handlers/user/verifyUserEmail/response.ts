import { DefaultResponse } from '@/handlers/_shared/defaultResponse'
import { fields } from '@/schemas/fields'
import { Static, Type } from '@sinclair/typebox'

export const verifyUserEmailResult = Type.Null()

export const verifyUserEmailResponse: DefaultResponse<typeof verifyUserEmailResult> = {
    result: verifyUserEmailResult,
    message: fields.message,
}

export type VerifyUserEmailResult = Static<typeof verifyUserEmailResult>

export type VerifyUserEmailResponse = DefaultResponse<VerifyUserEmailResult>
