import { FastifyInstance, FastifyPluginOptions } from 'fastify'
import fs from 'fastify-plugin'
import fastifySwagger from '@fastify/swagger'
import fastifySwaggerUi from '@fastify/swagger-ui'
import { getAppVersion } from '@/utils/misc'
import env from '@/utils/env'

export default fs(async function (server: FastifyInstance, _options: FastifyPluginOptions, done: CallableFunction) {
    if (env.ENVIRONMENT == 'development') {
        server.register(fastifySwagger, {
            swagger: {
                info: {
                    title: 'Split Bill',
                    description: 'Swagger API documentation',
                    version: getAppVersion(),
                },
                externalDocs: {
                    url: 'https://swagger.io',
                    description: 'Find more info here',
                },
                host: `${env.HOST}:${env.PORT}`,
                schemes: ['http', 'https'],
                consumes: ['application/json'],
                produces: ['application/json'],
            },
        })
        server.register(fastifySwaggerUi, {
            routePrefix: '/docs',
        })
    }
    done()
})
