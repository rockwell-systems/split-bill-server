import { SYS_CONSTANTS } from '@/constants/systemConstants'
import { readFileSync } from 'fs'
import path from 'path'

function getAppVersion(): string {
    return JSON.parse(readFileSync(path.join(__dirname, '../../../package.json'), SYS_CONSTANTS.DEFAULT_ENCODING)).version
}

export { getAppVersion }
