import { nanoid } from 'nanoid'
import { faker } from '@faker-js/faker'
import { SHA256 } from 'crypto-js'
import { Permission, Prisma, PrismaClient } from '@prisma/client'

export const seedUser = async (prisma: PrismaClient) => {
    const users = [
        {
            id: 'AAABBBCCC001',
            permission: Permission.READ_ONLY,
        },
        {
            id: 'AAABBBCCC002',
            permission: Permission.READ_ONLY,
        },
        {
            id: 'AAABBBCCC003',
            permission: Permission.READ_WRITE,
        },
        {
            id: 'AAABBBCCC004',
            permission: Permission.READ_WRITE,
        },
    ]

    const dataList: Prisma.UserCreateInput[] = []

    for (let i = 0; i < users.length; i++) {
        const userSearch = await prisma.user.findUnique({
            where: {
                userId: users[i].id,
            },
        })

        if (userSearch) {
            // already seeded. skip.
            continue
        }

        const salt = nanoid(16)
        const password = 'password'
        const hash = SHA256(salt + password).toString()

        dataList.push({
            userId: users[i].id,
            userName: faker.name.fullName(),
            salt: salt,
            hash: hash,
            permission: users[i].permission,
        })
    }

    await prisma.user.createMany({
        data: dataList,
    })

    return `User: ${dataList.length}row(s) inserted.`
}
