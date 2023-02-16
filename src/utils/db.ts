import { SYS_CONSTANTS } from '@/constants/systemConstants'
import { PrismaClient } from '@prisma/client'
import { nanoid } from 'nanoid'

export const dbUtils = {
    generateId: () => {
        return nanoid(SYS_CONSTANTS.NANOID_LENGTH)
    },
    getSysDate: async (prisma: PrismaClient): Promise<Date> => {
        const result: { sysDate: Date }[] = await prisma.$queryRaw`SELECT CURDATE() as sysDate;`
        return result[0].sysDate
    },
}
