import { domainOptional } from '@/domains/domains'
import { Static, Type } from '@sinclair/typebox'

export const getProductsQuery = Type.Object({
    productId: domainOptional.productId,
    productName: domainOptional.productName,
    productDescription: domainOptional.productDescription,
    productPriceFrom: domainOptional.productPrice,
    productPriceTo: domainOptional.productPrice,
})

export type GetProductsQuery = Static<typeof getProductsQuery>
