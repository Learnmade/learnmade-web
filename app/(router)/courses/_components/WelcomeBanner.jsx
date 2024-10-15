
import Image from 'next/image'
import React from 'react'

function WelcomeBanner() {
  return (
    <div className='flex p-5 gap-5 bg-white border rounded-xl items-center'>
        <div>
            <Image src='/banner.png' alt='banner' width={100} height={100}/>
        </div>
        <div>
            <h2 className='font-bold text-[27px]'>Welcome to <span className='text-primary'> LearnMade</span>  Accademy</h2>
            <h2 className='text-gray-500'>Here you can easily learn about programming, web development, cyber security</h2>
        </div>
    </div>
    
  )
}

export default WelcomeBanner
