"use client"
import {Card,CardContent,  CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"

import Image from "next/image"
import Link from "next/link"
import { Button } from "../ui/button"

export const SchoolCards = ({schoolList, showEdit}) => {

//render the list and use shadcn component
console.log(schoolList);


return (
  
<div className="flex flex-wrap p-10 justify-evenly items-center gap-8">
  {schoolList.map((school,index)=> (
    <Card key={index} className="md:w-1/4 sm:w-full">
    <CardHeader>
      <CardTitle className="line-clamp-1">{school.name}</CardTitle>
      <CardDescription className="line-clamp-1">{school.sAddress}, {school.city}, {school.state}</CardDescription>
      {/* <CardDescription>{`State: ${school.sAddress}`}</CardDescription> */}
    </CardHeader>
    <CardContent>
      <Image src={school.photo} alt={school.name} width={300} height={300} className="w-full"/>
      <p>{school.description}</p>
    </CardContent>
    <CardFooter className="flex flex-col gap-5"> 
     <Link className='w-full' href={`/schools/${school._id}`}> <Button variant="custom" className='w-full'>Learn More </Button></Link>
     { showEdit && (<Link className='w-full' href={`/manageSchools/${school._id}`}> <Button variant="lightcustom" className='w-full'>Edit School</Button></Link>)}
    </CardFooter>
  </Card>
  ))}
</div>

)

}
