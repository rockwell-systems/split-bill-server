import { domain } from '@/domains/domains'
import { Static, Type } from '@sinclair/typebox'
import { DefaultResponse } from '@/handlers/base/defaultResponse'

export const getProductsResult = Type.Array(
    Type.Object({
        productId: domain.productId,
        productName: domain.productName,
        productDescription: domain.productDescription,
        productPrice: domain.productPrice,
    })
)

export const getProductsResponse: DefaultResponse<typeof getProductsResult> = {
    result: getProductsResult,
}

export type GetProductsResult = Static<typeof getProductsResult>

export type GetProductsResponse = DefaultResponse<GetProductsResult>
