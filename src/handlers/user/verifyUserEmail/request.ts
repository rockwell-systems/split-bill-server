import { fields } from '@/schemas/fields'
import { Static, Type } from '@sinclair/typebox'

export const verifyUserEmailRequest = Type.Object({
    user_id: fields.user_id,
    otp: Type.String(),
})

export type VerifyUserEmailRequest = Static<typeof verifyUserEmailRequest>
