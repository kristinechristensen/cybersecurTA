"use client"
import {Card,CardContent,  CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"

import Link from "next/link"
import { Button } from "../ui/button"
import { RiDoubleQuotesL } from "react-icons/ri";
import { RiDoubleQuotesR } from "react-icons/ri";
import { TbLockHeart } from "react-icons/tb";

export const TestimonialCards = ({testimonyList}) => {



return (
  
<div className="flex flex-wrap p-10 gap-8 px-24 justify-center">
  {testimonyList.map((testimony,index)=> {
    if(!testimony.testimony) return null;
    return (<Card key={index} className="flex flex-col w-full sm:w-1/2 md:w-1/3 lg:w-1/4 flex">
    <CardHeader>
      <CardTitle className="line-clamp-1 flex items-center"><TbLockHeart className="mr-2 text-xl text-red-700" />
      {testimony.firstName} {testimony.lastName} | {(testimony.userType===0)?'Admin':((testimony.userType === 1)?'Faculty':'Student')}</CardTitle>
      <CardDescription className="line-clamp-1">{testimony.school.name} |  {testimony.pos || 'Undeclared'}</CardDescription>
      
    </CardHeader>
    <CardContent className="flex-1">
    
      <p className="text-lg bg-gray-100 p-4 sm:p-6 border-l-4 border-red-600   border-r-4  text-gray-700 rounded-md shadow-lg flex items-start">
        <RiDoubleQuotesL className="text-2xl mr-2"/>
    <span className="flex-1">{testimony.testimony} </span>   <RiDoubleQuotesR className="text-2xl ml-2 "/>
</p>
    </CardContent>
    <CardFooter className="mt-auto"> 
     <Link className='w-full' href={`/users/${testimony._id}`}> <Button variant="custom" className='w-full'>Learn More About Me</Button></Link>
    </CardFooter>
  </Card>)
  })}
</div>

)

}
