import { SYS_CONSTANTS } from '@/constants/systemConstants'
import { nanoid } from 'nanoid'

export const dbUtils = {
    generateId: () => {
        return nanoid(SYS_CONSTANTS.NANOID_LENGTH)
    },
}
