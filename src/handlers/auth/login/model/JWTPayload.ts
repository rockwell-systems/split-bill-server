import { Permission } from '@prisma/client'

export type JWTPayload = {
    userId: string
    userName: string
    permission: Permission
}
