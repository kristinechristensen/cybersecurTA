"use client"
import {Card,CardContent,  CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"

import Image from "next/image"
import Link from "next/link"
import { Button } from "../ui/button"

export const UserCard = ({userList}) => {

//render the list and use shadcn component - need to add images here
const getImg =(pos)=>{
  switch (pos){
      case "Cloud Security": 
          return  "/pos/cloudsecurity.png";
      case "Computer Science":
          return "/pos/computerscience.png";
      case "Cyber Operations":
          return "/pos/cs.png";
      case "Cybersecurity":
          return "/pos/cybersecurity.png";
      case "Cybersecurity and Information Assurance":
          return "/pos/cyberinfoassurance.png";
      case "Cybersecurity Engineering":
          return "/pos/cyberengineering.png";
      case "Cybersecurity Management":
          return "/pos/cybermanagement.png";
      case "Cybersecurity Policy and Governance": 
          return "/pos/cyberpolicy.png";
      case "Digital Forensics and Cyber Investigations": 
          return "/pos/digitalforensics.png";
      case "Network Security and Administration": 
          return "/pos/networksecurity.png";    
      case "Penetration Testing and Ethical Hacking":
          return "/pos/pentesting.png";   
      default:
          return "/pos/ask.png"
      

  }
}


return (
  
<div className="flex flex-wrap p-10 justify-evenly items-center gap-8">
  {userList.map((user,index)=> (
    <Card key={index} className="md:w-1/4 sm:w-full mt-2">
    <CardHeader>
      <CardTitle className="line-clamp-1">{user.firstName} {user.lastName} | {(user.userType===0)?'Admin':((user.userType === 1)?'Faculty':'Student')}</CardTitle>
      <CardDescription className="line-clamp-1">{user.school.name} |  {user.pos || 'Undeclared'}</CardDescription>
      {/* <CardDescription>{`State: ${user.sAddress}`}</CardDescription> */}
    </CardHeader>
    <CardContent>
    <Image src={getImg(user.pos)} alt={user.firstName + " " + user.lastName} width={300} height={300} className="w-full"/>
       
      <p>{user.description}</p>
    </CardContent>
    <CardFooter>
     <Link className='w-full' href={`/users/${user._id}`}> <Button variant="custom" className='w-full'>Learn More </Button></Link>
    </CardFooter>
  </Card>
  ))}
</div>

)

}
