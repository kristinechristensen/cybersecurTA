"use client";
import { useParams, useSearchParams } from "next/navigation";
export default function AuthErrorPage(){
 
  return (
    <div className="container h-screen flex items-center justify-center items-center flex-col gap-6">
      <h1 className="text-3xl text-white font-bold"> Ups, it seems that you don't have an account 👾</h1>
    </div>
  )
}