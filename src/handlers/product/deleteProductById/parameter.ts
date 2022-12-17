import { domain } from '@/domains/domains'
import { Static, Type } from '@sinclair/typebox'

export const deleteProductByIdParams = Type.Object({
    productId: domain.productId,
})

export type DeleteProductByIdParams = Static<typeof deleteProductByIdParams>
