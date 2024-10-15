
import { useUser } from '@clerk/nextjs';
import { Button } from '../../../../@/components/ui/button';
import React from 'react'
import Link from 'next/link';
import GlobalApi from '../../../_utils/GlobalApi';
import { useRouter } from 'next/navigation';

function CourseEnrollSection({courseInfo}) {
    const membership = true;
    const {user}=useUser();
    const router =useRouter();
    const onEnrollCourse=()=>{
      GlobalApi.enrollToCourse(courseInfo?.slug, user?.primaryEmailAddress?.emailAddress).then((resp)=>{
        if(resp){
            router.push('/watch-course/'+resp.createUserEnrollCourse.id)
          }
        })
    }
  return (
    <div className='p-3 text-center rounded-sm bg-primary '>
      <h2 className='text-[22px] font-bold text-white'>Enroll Course Now</h2>
      {user&&(membership||courseInfo.paid)?
      <div className='flex flex-col gap-3'>
        <h2 className='text-[16px] text-white font-light'>
             Enroll in a course, get access to exclusive content, and earn rewards.
        </h2>
         <Button className='bg-white text-primary hover:bg-white hover:text-primary p-2' 
         onClick={()=>onEnrollCourse()}
         >Enroll Now</Button>
      </div>
:!user?<div className='flex flex-col gap-3'>
<h2 className='text-[16px] text-white font-light'>
     Enroll in a course, get access to exclusive content, and earn rewards.
</h2>
<Link href={'/sign-in'}>
 <Button className='bg-white text-primary
  hover:bg-white hover:text-primary p-2'>Enroll Now</Button>
  </Link>
</div>
:
        <div className='flex flex-col gap-2'>
        <h2 className=' text-[16px] text-white font-light '>
            Enroll in a course, get access to exclusive content, and earn rewards.
        </h2>
        <Button className='bg-white text-primary hover:bg-white hover:text-primary p-2'>Buy Membership at just 299/-</Button>
        </div>
}
    </div>
  )
}

export default CourseEnrollSection
