"use client"
import {Card,CardContent,  CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"

import Image from "next/image"
import Link from "next/link"
import { Button } from "../ui/button"

export const TestimonialCards = ({testimonyList}) => {



return (
  
<div className="flex flex-wrap p-10 justify-evenly items-center gap-y-3">
  {testimonyList.map((testimony,index)=> {
    if(!testimony.testimony) return null;
    return (<Card key={index} className="md:w-1/4 sm:w-full">
    <CardHeader>
      <CardTitle className="line-clamp-1">{testimony.firstName} {testimony.lastName}</CardTitle>
      {/* <CardDescription className="line-clamp-1">{testimony.sAddress}, {testimony.city}, {testimony.state}</CardDescription> */}
      {/* <CardDescription>{`State: ${testimony.sAddress}`}</CardDescription> */}
    </CardHeader>
    <CardContent>
      <Image src={testimony.school.photo} alt={testimony.school.name} width={300} height={300} className="w-full"/>
      <p>{testimony.testimony}</p>
    </CardContent>
    <CardFooter className="flex flex-col gap-5"> 
     <Link className='w-full' href={`/users/${testimony._id}`}> <Button variant="custom" className='w-full'>Learn More </Button></Link>
    </CardFooter>
  </Card>)
  })}
</div>

)

}
