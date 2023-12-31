import React from 'react'
import Logo from './logo'
import { Button } from '@/components/ui/button'

function Footer() {
  return (
    <div className='flex items-center w-full p-6 z-50'>
        <Logo />
        <div className='md:ml-auto w-full justify-between md:justify-end flex items-center gap-x-2 text-muted-foreground'>
            <Button variant="ghost" size="sm">Private Policy</Button>
            <Button variant="ghost" size="sm">Terms & Condition</Button>
        </div>
    </div>
  )
}

export default Footer  