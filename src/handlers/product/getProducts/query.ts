import { field } from '@/schemas/fields'
import { Static, Type } from '@sinclair/typebox'

export const getProductsQuery = Type.Object({
    productId: Type.Optional(field.productId),
    productName: Type.Optional(field.productName),
    productDescription: Type.Optional(field.productDescription),
    productPriceFrom: Type.Optional(field.productPrice),
    productPriceTo: Type.Optional(field.productPrice),
})

export type GetProductsQuery = Static<typeof getProductsQuery>
