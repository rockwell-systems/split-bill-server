import { field } from '@/schemas/fields'
import { Static, Type } from '@sinclair/typebox'

export const createProductRequest = Type.Object({
    productName: field.productName,
    productDescription: field.productDescription,
    productPrice: field.productPrice,
})

export type CreateProductRequest = Static<typeof createProductRequest>
