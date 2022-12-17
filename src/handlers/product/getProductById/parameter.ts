import { domain } from '@/domains/domains'
import { Static, Type } from '@sinclair/typebox'

export const getProductByIdParams = Type.Object({
    productId: domain.productId,
})

export type GetProductByIdParams = Static<typeof getProductByIdParams>
