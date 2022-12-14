import { FastifyInstance, FastifyPluginOptions } from 'fastify'
import fs from 'fastify-plugin'

import fastifySensible from '@fastify/sensible'

export default fs(async function (server: FastifyInstance, options: FastifyPluginOptions, done: CallableFunction) {
    server.register(fastifySensible, options)
    done()
})
