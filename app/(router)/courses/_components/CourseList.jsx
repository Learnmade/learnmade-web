"use client"
import React, { useEffect, useState } from 'react'
import GlobalApi from '../../../_utils/GlobalApi.js'; 
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "../../../../@/components/ui/select.jsx"
import CourseIteam from './CourseIteam.jsx'
import Link from 'next/link.js'
  
function CourseList() {
    const [courseLists, setCourseLists] =useState([])
    useEffect(()=>{
        getAllCourses() // calling the function to fetch all courses when component mounts
    },[])
    const getAllCourses = () =>{
        GlobalApi.getAllCourseList().then(resp=>{
            setCourseLists(resp?.courseLists)
        })
    }
  return (
    <div className='p-5 bg-white rounded-lg mt-5'>
      <div className='flex items-center justify-between cursor-pointer'>
        <h2 className='text-[20px] font-bold text-primary'>All Courses</h2>
        <Select>
            <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Filter" />
            </SelectTrigger>
            <SelectContent>
                <SelectItem value="light">All</SelectItem>
                <SelectItem value="dark">Paid</SelectItem>
                <SelectItem value="system">Free</SelectItem>
            </SelectContent>
        </Select>
      </div>
      
      <div className='grid grid-cols-2 lg:grid-cols-3 gap-3 mt-4'>
       {courseLists?.length>0? courseLists?.map((iteam, index)=>(
        <Link href={'/course-preview/'+iteam.slug}>
        <div key={index}>
          <CourseIteam course={iteam}/>
        </div>
        </Link>
       ))
    :
    [1]?.map((iteam, index)=>(
        <div key={index} className='w-full h-[240px] rounded-xl m-2 bg-slate-200 animate-pulse'>
        </div>
    )
       
    )}
   
      </div>
    </div>
  )
}

export default CourseList
