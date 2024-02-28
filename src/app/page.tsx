import { LoginButton } from '@/components/auth/login-button'
import { Button } from '@/components/ui/button'

export default function Home() {
  return (
    <main className='flex flex-col h-full border items-center justify-center bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-sky-400 to-blue-800'>
      <div className='flex flex-col gap-5 items-center justify-center text-white text-center'>
        <h1 className='text-6xl font-semibold text-white drop-shadow-md'>
          🔐 Auth
        </h1>

        <p className='text-2xl'>A simple authentication service</p>

        <LoginButton>
          <Button variant='secondary' size='lg'>
            Sign In
          </Button>
        </LoginButton>
      </div>
    </main>
  )
}
