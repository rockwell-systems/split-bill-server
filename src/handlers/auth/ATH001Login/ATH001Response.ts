import { Static, Type } from '@sinclair/typebox'

import { DefaultResponse } from '@/handlers/_shared/defaultResponse'

export const ATH001ResultSchema = Type.Null()

export const ATH001ResponseSchema: DefaultResponse<typeof ATH001ResultSchema> = {
    result: ATH001ResultSchema,
}

export type ATH001ResultType = Static<typeof ATH001ResultSchema>

export type ATH001ResponseType = DefaultResponse<ATH001ResultType>
