import Image from 'next/image'
import React from 'react'

function CourseIteam({course}) {
  return (
    <div className='border rounded-xl hover:shadow-md cursor-pointer'>
      <Image src={course?.banner?.url} width={500} height={150} className='rounded-t-xl' />
    {course?.chapter?.length ===0 ?
          <div className='gap-1 p-2'>
          <h2 className='font-semibold'>{course.name}</h2>
          <h2 className='text-[12px] text-gray-400'>{course.author}</h2>
        <div className='flex'>
          <Image src='/youtube.png' alt='youtube' width={20} height={20}/>
          <h2 className='text-[10px] text-gray-400 '>Watch on YouTube</h2>
        </div>
        <h2 >{course?.paid?'Paid':'Free'}</h2> 
        </div>:

        <div className='gap-1 p-3'>
          <h2 className='font-semibold'>{course.name}</h2>
          <h2 className='text-[12px] text-gray-400'>{course.author}</h2>
        <div className='flex gap-2 text-[12px] items-center text-gray-400'>
          <Image src='/chapter.png' alt='chapter' width={20} height={20}/>
          <h2>Chapters</h2>
        </div>
        <h2 >{course?.paid?'Paid':'Free'}</h2>
        </div>}
   
    </div>
  )
}

export default CourseIteam
