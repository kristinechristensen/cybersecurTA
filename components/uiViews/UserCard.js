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
        case "Cybersecurity":
            return "/pos/cs.png";
        case "Computer Science":
            return "/pos/cs.png";
        case "math":
        case "":
            return "" 
        default:
            return ""
        

    }
}

return (
  
<div>
<h1>User List</h1>
  {userList.map((user,index)=> (
    <Card key={index}>
    <CardHeader>
      <CardTitle>{user.firstName} {user.lastName}</CardTitle>
      <CardDescription>{user.school.name} |  {user.pos}</CardDescription>
      {/* <CardDescription>{`State: ${user.sAddress}`}</CardDescription> */}
    </CardHeader>
    <CardContent>
    <Image src={getImg(user.pos)} alt={user.firstName + " " + user.lastName} width={300} height={300}/>
      {/* <p>Skills: </p>  <-- save for 
      <ul>
        {user.skills.map((elem)=><li key={elem}>{elem}</li>)}
      </ul> */}
      
      <p>{user.description}</p>
    </CardContent>
    <CardFooter>
     <Link href={`/users/${user._id}`}> <Button>Learn More </Button></Link>
    </CardFooter>
  </Card>
  ))}
</div>

)

}
