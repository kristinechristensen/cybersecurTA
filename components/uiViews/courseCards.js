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
  
<div>
<h1>Course List</h1>
  {courseList.map((course,index)=> (
    <Card key={index}>
    <CardHeader>
      <CardTitle>{course.title} | {course.crn}</CardTitle>
      <CardDescription>{course.schoolId.name}</CardDescription>
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
