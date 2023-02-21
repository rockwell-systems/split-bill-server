import { Static, Type } from '@sinclair/typebox'

import { fields } from '@/schemas/fields'

export const XXX000QuerySchema = Type.Object({
    flag: fields.boolean,
})

export type XXX000QueryType = Static<typeof XXX000QuerySchema>
