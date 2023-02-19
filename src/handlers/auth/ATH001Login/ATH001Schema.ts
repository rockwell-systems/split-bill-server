import { FastifySchema } from 'fastify'

import { ATH001RequestSchema } from './ATH001Request'
import { ATH001ResponseSchema } from './ATH001Response'

const description = `
# Login
You can use some markdown syntaxs like header, lists and text formattings.
It would be nice to describe your api overivew here.
`

export const ATH001Schema: FastifySchema = {
    summary: `Login`,
    tags: ['Auth'],
    description: description,
    body: ATH001RequestSchema,
    response: {
        200: ATH001ResponseSchema,
    },
}
