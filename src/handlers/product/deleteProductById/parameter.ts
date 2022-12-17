import { field } from '@/schemas/fields'
import { Static, Type } from '@sinclair/typebox'

export const deleteProductByIdParams = Type.Object({
    productId: field.productId,
})

export type DeleteProductByIdParams = Static<typeof deleteProductByIdParams>
