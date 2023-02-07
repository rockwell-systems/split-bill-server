import { Algorithm } from 'fast-jwt/src/index'

export const SYS_CONSTANTS: {
    NANOID_LENGTH: number
    DEFAULT_ENCODING: BufferEncoding
    JWT_SIGN_ALGO: Algorithm
    SALT_ROUNDS: number
} = {
    NANOID_LENGTH: 12,
    DEFAULT_ENCODING: 'utf-8',
    JWT_SIGN_ALGO: 'RS256',
    SALT_ROUNDS: 10,
}
