// resolve module alias
import 'module-alias/register'

// imports
import path from 'path'
import fastify, { FastifyListenOptions } from 'fastify'
import fastifyAutoload from '@fastify/autoload'
import env from '@/utils/env'
import { getAppVersion } from '@/utils/misc'

// server config
const opts: FastifyListenOptions = {
    host: env.HOST,
    port: env.PORT,
}

// logger config
const envToLogger = {
    development: {
        transport: {
            target: 'pino-pretty',
            options: {
                translateTime: 'HH:MM:ss Z',
                ignore: 'pid,hostname',
            },
        },
    },
    production: true,
}

// fastify instance
const Server = fastify({
    logger: envToLogger[env.ENVIRONMENT],
})

// autoload plugins and routes
Server.register(fastifyAutoload, { dir: path.join(__dirname, 'plugins') })
Server.register(fastifyAutoload, { dir: path.join(__dirname, 'routes') })

// root
Server.get('/', (requst, reply) => {
    reply.send({ name: 'Pay Together', version: getAppVersion(), message: `Let's pay together!` })
    return
})

// boot process
Server.ready((e) => {
    if (e) throw e
})

// listen
Server.listen(opts, (err) => {
    if (err) {
        console.error(err)
        process.exit(1)
    }
})
