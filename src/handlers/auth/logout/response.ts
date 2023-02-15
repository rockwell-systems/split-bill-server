import { Static, Type } from '@sinclair/typebox'
import { DefaultResponse } from '@/handlers/_shared/defaultResponse'

export const logoutResult = Type.Null()

export const logoutResponse: DefaultResponse<typeof logoutResult> = {
    result: logoutResult,
}

export type LogoutResult = Static<typeof logoutResult>

export type LogoutResponse = DefaultResponse<LogoutResult>
