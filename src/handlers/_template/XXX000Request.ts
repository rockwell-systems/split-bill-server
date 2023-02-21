import { Static, Type } from '@sinclair/typebox'

import { fields } from '@/schemas/fields'

export const XXX000RequestSchema = Type.Object({
    user_name: fields.user_name,
})

export type XXX000RequestType = Static<typeof XXX000RequestSchema>
