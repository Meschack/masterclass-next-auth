'use client'

import { useForm } from 'react-hook-form'
import { CardWrapper } from './card-wrapper'
import * as z from 'zod'
import { LoginFormSchema } from '../../../schemas'
import { zodResolver } from '@hookform/resolvers/zod'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '../ui/form'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import { FormError } from '../form-error'
import { FormSuccess } from '../form-success'
import { login } from '../../../actions/login'
import { useState, useTransition } from 'react'

interface State {
  success: undefined | string
  error: undefined | string
}

export const LoginForm = () => {
  const [state, setState] = useState<State>()

  const form = useForm<z.infer<typeof LoginFormSchema>>({
    defaultValues: {
      email: '',
      password: '',
    },
    resolver: zodResolver(LoginFormSchema),
  })

  const [isPending, startTransition] = useTransition()

  const onSubmit = (values: z.infer<typeof LoginFormSchema>) => {
    setState({ success: '', error: '' })

    startTransition(() => {
      login(values).then((data) => {
        setState({ success: data.success, error: data.error })
      })
    })
  }

  return (
    <CardWrapper
      headerLabel='Welcome back'
      backButtonHref='/auth/register'
      showSocial
      backButtonLabel="Don't have an account ?"
    >
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-6'>
          <div className='space-y-4'>
            <FormField
              control={form.control}
              name='email'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder='john.doe@gmail.com'
                      type='email'
                      disabled={isPending}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name='password'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      type='password'
                      placeholder='******'
                      disabled={isPending}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <FormError message={state?.error} />
          <FormSuccess message={state?.success} />

          <Button className='w-full' type='submit' disabled={isPending}>
            Submit
          </Button>
        </form>
      </Form>
    </CardWrapper>
  )
}
