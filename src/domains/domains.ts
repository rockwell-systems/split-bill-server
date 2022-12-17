import { Permission } from '@prisma/client'
import { Type } from '@sinclair/typebox'

const sharedDomain = {
    id: Type.String({ minLength: 12, maxLength: 12 }),
}

export const domain = {
    // User
    userId: sharedDomain.id,
    userName: Type.String({ minLength: 1, maxLength: 100 }),
    permisson: Type.Enum(Permission),
    // Product
    productId: sharedDomain.id,
    productName: Type.String({ minLength: 1, maxLength: 100 }),
    productDescription: Type.String({ minLength: 1, maxLength: 500 }),
    productPrice: Type.Number({ minimum: 1 }),
}

export const domainOptional: typeof domain = {
    // User
    userId: Type.Optional(domain.userId),
    userName: Type.Optional(domain.userName),
    permisson: Type.Optional(domain.permisson),
    // Task
    productId: Type.Optional(domain.productId),
    productName: Type.Optional(domain.productName),
    productDescription: Type.Optional(domain.productDescription),
    productPrice: Type.Optional(domain.productPrice),
}
