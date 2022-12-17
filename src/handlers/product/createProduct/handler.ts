import { RouteHandlerMethod } from 'fastify'
import { StatusCodes } from 'http-status-codes'
import { nanoid } from 'nanoid'
import { SYS_CONSTANTS } from '@/constants/sytemConstants'
import { CreateProductRequest } from './request'
import { CreateProductResponse, CreateProductResult } from './response'

export const createProductHandler: RouteHandlerMethod = async function (request, reply): Promise<CreateProductResponse> {
    const input = request.body as CreateProductRequest

    const productInserted = await this.prisma.product.create({
        data: {
            productId: nanoid(SYS_CONSTANTS.NANOID_LENGTH),
            productName: input.productName,
            productDescription: input.productDescription,
            productPrice: input.productPrice,
        },
    })

    const result: CreateProductResult = {
        productId: productInserted.productId,
        productName: productInserted.productName,
        productDescription: productInserted.productDescription,
        productPrice: productInserted.productPrice,
    }

    const response: CreateProductResponse = {
        result: result,
        message: 'New product is successfully created.',
    }

    reply.status(StatusCodes.CREATED)

    return response
}
