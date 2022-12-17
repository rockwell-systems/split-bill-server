import { FastifyInstance } from 'fastify'
import fs from 'fastify-plugin'

// getTasks
import { getTaskSchema } from '@/handlers/task/getTasks/schema'
import { getTaskHandler } from '@/handlers/task/getTasks/handler'

// getTaskByTaskId
import { getTaskByTaskIdSchema } from '@/handlers/task/getTaskByTaskId/schema'
import { getTaskByTaskIdHandler } from '@/handlers/task/getTaskByTaskId/handler'

// deleteTaskByTaskId
import { deleteTaskByTaskIdSchema } from '@/handlers/task/deleteTaskByTaskId/schema'
import { deleteTaskByTaskIdHandler } from '@/handlers/task/deleteTaskByTaskId/handler'

const RootRoute = '/task'
const taskId = ':taskId'

// Router plugin
export default fs(async function (server: FastifyInstance) {
    server.get(`${RootRoute}`, { schema: getTaskSchema }, getTaskHandler)
    server.get(`${RootRoute}/${taskId}`, { schema: getTaskByTaskIdSchema }, getTaskByTaskIdHandler)
    server.delete(`${RootRoute}/${taskId}`, { schema: deleteTaskByTaskIdSchema }, deleteTaskByTaskIdHandler)
})
