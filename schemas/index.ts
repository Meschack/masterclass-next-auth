import * as z from 'zod'

export const LoginFormSchema = z.object({
  email: z.string().email().min(1, {
    message: 'The email is required',
  }),
  password: z.string().min(1, {
    message: 'The password is required',
  }),
})
