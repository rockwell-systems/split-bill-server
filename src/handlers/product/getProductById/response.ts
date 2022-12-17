import { Static, Type } from '@sinclair/typebox'
import { DefaultResponse } from '@/handlers/base/defaultResponse'
import { domain } from '@/domains/domains'

export const getProductByIdResult = Type.Object({
    productId: domain.productId,
    productName: domain.productName,
    productDescription: domain.productDescription,
    productPrice: domain.productPrice,
})

export const getProductByIdResponse: DefaultResponse<typeof getProductByIdResult> = {
    result: getProductByIdResult,
}

export type GetProductByIdResult = Static<typeof getProductByIdResult>

export type GetProductByIdResponse = DefaultResponse<GetProductByIdResult>
