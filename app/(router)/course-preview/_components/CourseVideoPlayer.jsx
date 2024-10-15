import React from 'react'

function CourseVideoPlayer({VideoUrl}) {
  return (
   <video width={1000} height={250} controls className='rounded-sm'>
    <source src={VideoUrl} type='video/mp4'/>
   </video>
  )
}

export default CourseVideoPlayer
