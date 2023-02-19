import { FastifySchema } from 'fastify'

import { ATH002ResponseSchema } from './ATH002Response'

const description = `
# Logout
You can use some markdown syntaxs like header, lists and text formattings.
It would be nice to describe your api overivew here.
`

export const ATH002Schema: FastifySchema = {
    summary: `Logout`,
    tags: ['Auth'],
    description: description,
    response: {
        200: ATH002ResponseSchema,
    },
}
