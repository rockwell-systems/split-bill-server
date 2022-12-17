import { FastifyInstance } from 'fastify'
import fs from 'fastify-plugin'
import { createProductSchema } from '@/handlers/product/createProduct/schema'
import { createProductHandler } from '@/handlers/product/createProduct/handler'
import { getProductByIdSchema } from '@/handlers/product/getProductById/schema'
import { getProductByIdHandler } from '@/handlers/product/getProductById/handler'
import { getProductsHandler } from '@/handlers/product/getProducts/handler'
import { getProductsSchema } from '@/handlers/product/getProducts/schema'
import { updateProductSchema } from '@/handlers/product/updateProduct/schema'
import { updateProductHandler } from '@/handlers/product/updateProduct/handler'
import { deleteProductByIdHandler } from '@/handlers/product/deleteProductById/handler'
import { deleteProductByIdSchema } from '@/handlers/product/deleteProductById/schema'

const rootRoute = '/product'
const productId = ':productId'

// Router plugin
export default fs(async function (server: FastifyInstance) {
    // create a new product
    server.post(`${rootRoute}`, { schema: createProductSchema }, createProductHandler)

    // get a product by id
    server.get(`${rootRoute}/${productId}`, { schema: getProductByIdSchema }, getProductByIdHandler)

    // get products by filter
    server.get(`${rootRoute}`, { schema: getProductsSchema }, getProductsHandler)

    // update a product
    server.put(`${rootRoute}`, { schema: updateProductSchema }, updateProductHandler)

    // deleate a product by id
    server.delete(`${rootRoute}/${productId}`, { schema: deleteProductByIdSchema }, deleteProductByIdHandler)
})
