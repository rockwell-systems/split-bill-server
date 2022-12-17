import { fieldOptional } from '@/schemas/fields'
import { Static, Type } from '@sinclair/typebox'

export const getProductsQuery = Type.Object({
    productId: fieldOptional.productId,
    productName: fieldOptional.productName,
    productDescription: fieldOptional.productDescription,
    productPriceFrom: fieldOptional.productPrice,
    productPriceTo: fieldOptional.productPrice,
})

export type GetProductsQuery = Static<typeof getProductsQuery>
