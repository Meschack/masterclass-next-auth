import Link from 'next/link'
import { Button } from '../ui/button'

interface BackButtonProps {
  label: string
  href: string
}

export const BackButton = ({ label, href }: BackButtonProps) => {
  return (
    <Button asChild className='w-full' variant='link' size='sm'>
      <Link href={href}>{label}</Link>
    </Button>
  )
}
