// Fastify framework
import { FastifyInstance, FastifyPluginOptions } from 'fastify'
import fs from 'fastify-plugin'

// getTasks
import { getTaskSchema } from '@/handlers/task/getTasks/schema'
import { getTaskHandler } from '@/handlers/task/getTasks/handler'

// getTaskByTaskId
import { getTaskByTaskIdSchema } from '@/handlers/task/getTaskByTaskId/schema'
import { getTaskByTaskIdHandler } from '../handlers/task/getTaskByTaskId/handler'

// deleteTaskByTaskId
import { deleteTaskByTaskIdSchema } from '@/handlers/task/deleteTaskByTaskId/schema'
import { deleteTaskByTaskIdHandler } from '@/handlers/task/deleteTaskByTaskId/handler'

const RootRoute = '/task'

// Router plugin
export default fs(async function (Server: FastifyInstance, Options: FastifyPluginOptions) {
    Server.get(`${RootRoute}`, { schema: getTaskSchema }, getTaskHandler)
    Server.get(`${RootRoute}/:taskId`, { schema: getTaskByTaskIdSchema }, getTaskByTaskIdHandler)
    Server.delete(`${RootRoute}/:taskId`, { schema: deleteTaskByTaskIdSchema }, deleteTaskByTaskIdHandler)
})
