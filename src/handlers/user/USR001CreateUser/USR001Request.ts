import { Static, Type } from '@sinclair/typebox'

import { fields } from '@/schemas/fields'

export const USR001RequestSchema = Type.Object({
    user_name: fields.user_name,
    user_email: fields.user_email,
    password: fields.password,
})

export type USR001RequestType = Static<typeof USR001RequestSchema>
