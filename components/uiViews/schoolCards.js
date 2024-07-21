"use client"
import {Card,CardContent,  CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"

import Image from "next/image"
import Link from "next/link"
import { Button } from "../ui/button"

export const SchoolCards = ({schoolList}) => {

//render the list and use shadcn component
console.log(schoolList);


return (
  
<div>
<h1>Participating Schools</h1>
  {schoolList.map((school,index)=> (
    <Card key={index}>
    <CardHeader>
      <CardTitle>{school.name}</CardTitle>
      <CardDescription>{school.sAddress}, {school.city}, {school.state}</CardDescription>
      {/* <CardDescription>{`State: ${school.sAddress}`}</CardDescription> */}
    </CardHeader>
    <CardContent>
      <Image src={school.photo} alt={school.name} width={300} height={300}/>
      <p>{school.description}</p>
    </CardContent>
    <CardFooter>
      <Button> Learn More </Button>
    </CardFooter>
  </Card>
  ))}
</div>

)

}
