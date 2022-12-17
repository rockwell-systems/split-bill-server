import { field } from '@/schemas/fields'
import { Static, Type } from '@sinclair/typebox'

export const getProductByIdParams = Type.Object({
    productId: field.productId,
})

export type GetProductByIdParams = Static<typeof getProductByIdParams>
