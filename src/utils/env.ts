import { config } from 'dotenv'
import { expand } from 'dotenv-expand'
import envSchema from 'env-schema'
import { Static, Type } from '@sinclair/typebox'

expand(config())

const EnvProps = Type.Object({
    HOST: Type.String(),
    PORT: Type.Number(),
    ENVIRONMENT: Type.Union([Type.Literal('development'), Type.Literal('production')]),
    ALLOWED_ORIGINS: Type.String(),
    JWT_PRIVATE_KEY_PATH: Type.String(),
    JWT_PUBLIC_KEY_PATH: Type.String(),
    SENDINBLUE_API_KEY: Type.String(),
})

const env: Static<typeof EnvProps> = envSchema({
    schema: EnvProps,
    data: process.env,
    dotenv: true,
})

export default env
