'use server'

import * as z from 'zod'
import { LoginFormSchema } from '../schemas'

export const login = async (values: z.infer<typeof LoginFormSchema>) => {
  const validatedFields = LoginFormSchema.safeParse(values)

  if (!validatedFields.success) return { error: 'Invalid fields' }

  return {
    success: 'Email sent!',
  }
}
