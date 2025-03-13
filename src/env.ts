import { z } from 'zod'

const envSchema = z.object({
  VITE_API_URL: z.string().url(),
  MODE: z.enum(['producion', 'development', 'test'])
})

export const env = envSchema.parse(import.meta.env)
