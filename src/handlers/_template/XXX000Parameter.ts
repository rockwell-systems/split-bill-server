import { Static, Type } from '@sinclair/typebox'

import { fields } from '@/schemas/fields'

export const XXX000ParamsSchema = Type.Object({
    user_id: fields.user_id,
})

export type XXX000ParamsType = Static<typeof XXX000ParamsSchema>
