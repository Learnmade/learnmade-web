import React from 'react'
import CourseVideoPlayer from './CourseVideoPlayer'
import Markdown from 'react-markdown'

function CourseVideoDescription({courseInfo}) {
  return courseInfo&&(
    <div>
      <h2 className='text-[20px] font-semibold' >{courseInfo.name}</h2>
      <h2 className='text-[14px] text-gray-500 mb-3' >{courseInfo.author}</h2>
      <CourseVideoPlayer VideoUrl={courseInfo?.chapter[0]?.video?.url}/>
      <h2 className='mt-3 font-semibold text-[17px]' >Course Description</h2>
      <Markdown className='text-[13px] font-light mt-3 leading-7'>{courseInfo.description}</Markdown>
    </div>
  )
}

export default CourseVideoDescription
