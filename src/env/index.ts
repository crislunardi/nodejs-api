/* O Objetivo desse arquivo é carregar as variáveis de ambiente e validá-las usando o Zod */

import 'dotenv/config'
import { z } from 'zod'

/* Definindo o esquema de validação para as variáveis de ambiente */
const envSchema = z.object({
    NODE_ENV: z.enum(['development', 'test','production']).default('production'),
    DABATA_URL: z.string(),
    PORT: z.number().default(3333)
})

/* Validando as variáveis de ambiente carregadas do process.env */
const _env = envSchema.safeParse(process.env)

/* Se a validação falhar, exibe os erros e interrompe a aplicação */
if (_env.success === false) {
    console.error('Invalid enviroment variables:', z.treeifyError(_env.error))

    throw new Error('Invalid enviroment variables.')
}

export const env = _env.data