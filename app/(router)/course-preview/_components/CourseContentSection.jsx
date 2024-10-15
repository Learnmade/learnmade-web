"use client"
import { Lock, Play } from 'lucide-react'
import React, { useState } from 'react'

function CourseContentSection({courseInfo}) {
    const [activeIndex, setActiveIndex] =useState(0);
  return (
    <div className='bg-white p-3 rounded-sm mt-3'>
      {
        courseInfo?.chapter?.map((iteam, index)=>(
            <div>
                <h2 className={`flex items-center justify-between text-[14px] p-3
                border rounded-sm px-4 m-2 cursor-pointer hover:bg-gray-200 hover:text-gray-500 
                ${activeIndex===index&&`bg-primary text-white`}`}>
                    {index+1}. {iteam.name}
                {activeIndex===index?
                 <Play className='w-4 h-4'/>:    
                 <Lock className='w-4 h-4' />
                }
                     
                     
                    </h2>
            </div>
        ))
      }
    </div>
  )
}

export default CourseContentSection
