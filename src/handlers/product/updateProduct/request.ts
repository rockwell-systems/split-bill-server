import { field } from '@/schemas/fields'
import { Static, Type } from '@sinclair/typebox'

export const updateProductRequest = Type.Object({
    productId: field.productId,
    productName: field.productName,
    productDescription: field.productDescription,
    productPrice: field.productPrice,
})

export type UpdateProductRequest = Static<typeof updateProductRequest>
