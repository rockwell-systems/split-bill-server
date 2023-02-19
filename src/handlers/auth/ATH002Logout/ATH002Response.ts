import { Static, Type } from '@sinclair/typebox'

import { DefaultResponse } from '@/handlers/_shared/defaultResponse'

export const ATH002ResultSchema = Type.Null()

export const ATH002ResponseSchema: DefaultResponse<typeof ATH002ResultSchema> = {
    result: ATH002ResultSchema,
}

export type ATH002ResultType = Static<typeof ATH002ResultSchema>

export type ATH002ResponseType = DefaultResponse<ATH002ResultType>
