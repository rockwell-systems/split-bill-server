import { Permission } from '@prisma/client'
import { Type } from '@sinclair/typebox'

const sharedField = {
    id: Type.String({ minLength: 12, maxLength: 12 }),
    price: Type.Number({ minimum: 1 }),
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
    productPrice: sharedField.price,
}
