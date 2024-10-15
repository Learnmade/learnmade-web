"use client"
import { UserButton, useUser } from '@clerk/nextjs'
import { Button } from '../../../@/components/ui/button'
import { BellDot, Search } from 'lucide-react'

import Link from 'next/link'
import React from 'react'

export default function Header() {
  const {user, isLoaded} =useUser();
  return (
    <div className='flex bg-white p-4 justify-between'>
     <div className='flex gap-2 border rounded-md p-2'>
        <Search className='h-5 w-5'/>
        <input type="text" placeholder='Search' className='outline-none' />
     </div>
     <div className='flex items-center gap-4 text-white'>
        <BellDot className='text-gray-500'/>
        {isLoaded&&user?
        <UserButton/>
        :
        <Link href={'/sign-in'}>
           <Button>Get Started</Button>
        </Link>
        }
        
     </div>
    </div>
  )
}

