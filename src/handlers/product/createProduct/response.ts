import { domain } from '@/domains/domains'
import { Static, Type } from '@sinclair/typebox'
import { DefaultResponse } from '@/handlers/base/defaultResponse'

export const createProductResult = Type.Object({
    productId: domain.productId,
    productName: domain.productName,
    productDescription: domain.productDescription,
    productPrice: domain.productPrice,
})

export const createProductResponse: DefaultResponse<typeof createProductResult> = {
    result: createProductResult,
}

export type CreateProductResult = Static<typeof createProductResult>

export type CreateProductResponse = DefaultResponse<CreateProductResult>
