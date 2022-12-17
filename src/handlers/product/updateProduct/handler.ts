import { RouteHandlerMethod } from 'fastify'
import { StatusCodes } from 'http-status-codes'
import { UpdateProductRequest } from './request'
import { UpdateProductResponse, UpdateProductResult } from './response'

export const updateProductHandler: RouteHandlerMethod = async function (request, reply): Promise<UpdateProductResponse> {
    const input = request.body as UpdateProductRequest

    const productUpdated = await this.prisma.product.update({
        where: {
            productId: input.productId,
        },
        data: {
            productName: input.productName,
            productDescription: input.productDescription,
            productPrice: input.productPrice,
            updatedAt: new Date(),
        },
    })

    const result: UpdateProductResult = {
        productId: productUpdated.productId,
        productName: productUpdated.productName,
        productDescription: productUpdated.productDescription,
        productPrice: productUpdated.productPrice,
    }

    const response: UpdateProductResponse = {
        result: result,
        message: 'Product is successfully updated.',
    }

    reply.status(StatusCodes.CREATED)

    return response
}
