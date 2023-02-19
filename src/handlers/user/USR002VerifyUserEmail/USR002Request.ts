import { Static, Type } from '@sinclair/typebox'

import { fields } from '@/schemas/fields'

export const USR002RequestSchema = Type.Object({
    user_id: fields.user_id,
    otp: Type.String(),
})

export type USR002RequestType = Static<typeof USR002RequestSchema>
