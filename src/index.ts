// node cores
import path from 'path'

// fastify, fastify plugins
import fastify, { FastifyListenOptions } from 'fastify'
import fastifyAutoload from '@fastify/autoload'

// utils
import env from '@/utils/env'

// server config
const opts: FastifyListenOptions = {
    host: env.HOST,
    port: env.PORT
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
    production: true
}

// fastify instance
const Server = fastify({
    logger: envToLogger[env.ENVIRONMENT]
})

// autoload plugins and routes
Server.register(fastifyAutoload, { dir: path.join(__dirname, 'plugins') })
Server.register(fastifyAutoload, { dir: path.join(__dirname, 'routes') })

// root
Server.get('/', (requst, reply) => {
    return {
        "message": `Visit http://${env.HOST}:${env.PORT}/docs for swagger documentation.`
    }
})

// boot process
Server.ready(e => {
    if(e) throw e
    else console.log('All plugins has benn loaded.')
})

// listen
Server.listen(opts, (err) => {
    if (err) {
        console.error(err)
        process.exit(1)
    }
})