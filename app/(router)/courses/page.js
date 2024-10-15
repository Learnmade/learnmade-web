
import React from 'react'
import WelcomeBanner from './_components/WelcomeBanner'
import CourseList from './_components/CourseList'
import SideBanners from './_components/SideBanners'

function Course() {
  return (
    <div className='grid grid-cols-1  md:grid-cols-4 p-5 gap-4'>
      <div className='col-span-3'>
        <WelcomeBanner />
        <CourseList />
      </div>
      <div className='bg-white p-5 rounded-xl'>
         <SideBanners />
      </div>
    </div>
  )
}

export default Course
