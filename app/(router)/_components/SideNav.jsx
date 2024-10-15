"use client"
import { useUser } from '@clerk/nextjs'
import { BadgeIcon, BookOpen, GraduationCap, icons, LayoutDashboard } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useEffect } from 'react'

function SideNav() {
  const {user}= useUser();
    const menu =[
        {
            id:8,
            name: 'Dashboard',
            icon: LayoutDashboard,
            path:'/dashboard',
            auth:user
        },
        {
          id:1,
          name: 'All Courses',
          icon: BookOpen,
          path:'/courses',
          auth:true
      },
        {
            id:2,
            name: 'Memberships',
            icon: BadgeIcon,
            path:'/memberships',
            auth:true
        },
        {
            id:3,
            name:'Be Instructors',
            icon: GraduationCap,
            path:'/instructor',
            auth:true
        }
    ]
       const path = usePathname();
       useEffect(()=>{
        console.log('path', path);
       })
  return (
    <div className='p-5 bg-white shadow-sm border  h-screen'>
     
      <div className='font-bold text-[20px] text-blue-950 iteam-centre'>Learn-made</div>
      <hr className='mt-7' ></hr>
      <div className='mt-5'>
        {
            menu.map((item, index)=>item.auth&&(
              <Link href={item.path}>
                <div className={` group flex gap-3 mt-2 p-3 text-[18px] items-center text-gray-500 cursor-pointer hover:bg-primary hover:text-white rounded-md transition-all ease-in-out duration-200 ${path.includes(item.path)&&'bg-primary text-white'} `}>
                    <item.icon  className='group-hover:animate-bounce' />
                   <h1>{item.name}</h1>
                </div>
               </Link>
            ))
        }
      </div>
     
    </div>

  )
}

export default SideNav
