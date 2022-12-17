import { domain } from '@/domains/domains'
import { Static, Type } from '@sinclair/typebox'

export const createProductRequest = Type.Object({
    productName: domain.productName,
    productDescription: domain.productDescription,
    productPrice: domain.productPrice,
})

export type CreateProductRequest = Static<typeof createProductRequest>
