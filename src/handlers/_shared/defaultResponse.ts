import { HttpError } from '@fastify/sensible/lib/httpError'

export type DefaultResponse<T> = {
    result: T
    message?: unknown
}

export type RouteHanderResult<T> = Promise<T | HttpError>
