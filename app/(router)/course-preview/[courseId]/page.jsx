"use client"
import React, { useEffect, useState } from 'react';
import CourseVideoDescription from '../_components/CourseVideoDescription';
import GlobalApi from '../../../_utils/GlobalApi.js';  // Relative path
import CourseEnrollSection from '../_components/CourseEnrollSection';
import CourseContentSection from '../_components/CourseContentSection';

function CoursePreview({params}) {
    const [courseInfo, setcourseInfo]=useState();
    useEffect(()=>{
        params&&getCourseInfo();
    },[params])
    const getCourseInfo=()=>{
        GlobalApi.getCourseByID(params?.courseId).then((resp=>{
            setcourseInfo(resp.courseList)
        }))
    }
  return (
    <div className='grid grid-cols-1 md:grid-cols-3 gap-3 p-5'>
      <div className='bg-white col-span-2 p-5'>
        <CourseVideoDescription courseInfo={courseInfo}/>
      </div>
      <div>
      <CourseEnrollSection courseInfo={courseInfo} />

      <CourseContentSection courseInfo={courseInfo} />
      </div>
    </div>
  )
}

export default CoursePreview
