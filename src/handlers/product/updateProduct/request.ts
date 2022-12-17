import { domain } from '@/domains/domains'
import { Static, Type } from '@sinclair/typebox'

export const updateProductRequest = Type.Object({
    productId: domain.productId,
    productName: domain.productName,
    productDescription: domain.productDescription,
    productPrice: domain.productPrice,
})

export type UpdateProductRequest = Static<typeof updateProductRequest>
