"use client"
import GlobalApi from '../../../_utils/GlobalApi'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'

function SideBanners() {
    const[sideBanners, setsideBanners] =useState([])
    useEffect(()=>{
        getSideBanner();
    },[])
    const getSideBanner =()=>{
        GlobalApi.getSideBanners().then(resp=>{
            console.log(resp)
            setsideBanners(resp?.sideBanners)
        })
    }
  return (
    <div>
      {
        sideBanners?.map((item, index)=>(
            <div key={index}>
            <Image src={item.banner.url} alt='banner' width={500} height={300} className='rounded-xl cursor-pointer' onClick={()=>window.open(item?.url)}/>
        </div>
        )
           
        )
      }
    </div>
  )
}

export default SideBanners
