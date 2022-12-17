import { domain } from '@/domains/domains'
import { Static, Type } from '@sinclair/typebox'
import { DefaultResponse } from '@/handlers/base/defaultResponse'

export const updateProductResult = Type.Object({
    productId: domain.productId,
    productName: domain.productName,
    productDescription: domain.productDescription,
    productPrice: domain.productPrice,
})

export const updateProductResponse: DefaultResponse<typeof updateProductResult> = {
    result: updateProductResult,
}

export type UpdateProductResult = Static<typeof updateProductResult>

export type UpdateProductResponse = DefaultResponse<UpdateProductResult>
