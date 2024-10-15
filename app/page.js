"use client"
import { useRouter } from "next/navigation";
import { Button } from "../@/components/ui/button";
import './globals.css'
import { UserButton, useUser } from "@clerk/nextjs";
import { useEffect } from "react";

export default function Home() {
  const router = useRouter();
  const {user, isLoaded}=useUser();
  useEffect(()=>{
  if(user){
    router.push('/dashboard')
  }  else {
    isLoaded&&router.push('/courses')
  }
  },[user])
  return (
  <UserButton/>
  );
}
