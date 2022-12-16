import { readFileSync } from 'fs'
import path from 'path'

function getAppVersion(): string {
    return JSON.parse(readFileSync(path.join(__dirname, '../../../package.json'), 'utf8')).version
}

export { getAppVersion }
