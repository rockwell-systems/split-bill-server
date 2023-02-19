import { Static, Type } from '@sinclair/typebox'

import { fields } from '@/schemas/fields'

export const ATH001RequestSchema = Type.Object({
    user_email: fields.user_email,
    password: fields.password,
})

export type ATH001RequestType = Static<typeof ATH001RequestSchema>
