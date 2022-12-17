import { Algorithm } from 'fast-jwt/src/index'

export const SYS_CONSTANTS: {
    DEFAULT_ENCODING: BufferEncoding
    JWT_SIGN_ALGO: Algorithm
} = {
    DEFAULT_ENCODING: 'utf-8',
    JWT_SIGN_ALGO: 'RS256',
}
