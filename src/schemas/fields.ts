import { Permission } from '@prisma/client'
import { Type } from '@sinclair/typebox'

const sharedField = {
    id: Type.String({ minLength: 12, maxLength: 12 }),
}

export const field = {
    // User
    userId: sharedField.id,
    userName: Type.String({ minLength: 1, maxLength: 100 }),
    permisson: Type.Enum(Permission),
    // Product
    productId: sharedField.id,
    productName: Type.String({ minLength: 1, maxLength: 100 }),
    productDescription: Type.String({ minLength: 1, maxLength: 500 }),
    productPrice: Type.Number({ minimum: 1 }),
}

export const fieldOptional: typeof field = {
    // User
    userId: Type.Optional(field.userId),
    userName: Type.Optional(field.userName),
    permisson: Type.Optional(field.permisson),
    // Task
    productId: Type.Optional(field.productId),
    productName: Type.Optional(field.productName),
    productDescription: Type.Optional(field.productDescription),
    productPrice: Type.Optional(field.productPrice),
}
