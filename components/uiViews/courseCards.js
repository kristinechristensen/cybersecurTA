"use client"
import {Card,CardContent,  CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"

import Image from "next/image"
import Link from "next/link"
import { Button } from "../ui/button"

export const CourseCards = ({courseList}) => {


return (
  
<div className="flex flex-wrap p-10 justify-evenly items-center gap-8">
  {courseList.map((course,index)=> (
    <Card key={index} className="md:w-1/4 sm:w-full">
    <CardHeader>
      <CardTitle  className="line-clamp-1">{course.title} | {course.crn}</CardTitle>
      <CardDescription  className="line-clamp-1">{course.schoolId.name}</CardDescription>
      {/* <CardDescription>{`State: ${school.sAddress}`}</CardDescription> */}
    </CardHeader>
    <CardContent> {/* place holder content  */}
      <Image src={course.schoolId.photo} alt={course.schoolId.name} width={300} height={300}/>
      <p>{course.schoolId.description}</p>
    </CardContent>
    <CardFooter>
     <Link href={`/courses/${course._id}`}> <Button>Learn More </Button></Link>
    </CardFooter>
  </Card>
  ))}
</div>

)

}
