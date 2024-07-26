"use client"
import { useEffect, useState } from "react"
import { getUser } from "@/actions/getUserList"
import Image from "next/image"
import Link from "next/link"

const IndividualUser = ({params})=> {

const [user, setUser] = useState({});
const [school, setSchool] = useState({});

useEffect(()=> {

    const getData = async ()=> {
        const data = await getUser(params.id);
        const parseUser = JSON.parse(data);
        setUser(parseUser.user);
        setSchool(parseUser.school);
        console.log(parseUser);
    }

if(params?.id) getData();
},[params.id]);

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
 <h1>{user?.firstName} {user?.lastName}</h1>
<Image src={getImg(user.pos)} alt={user.firstName} width={300} height={300}/> 
<h1>Test</h1>
{school?.name}
{school?.desc}
<Link href="/users"> Back to School Listing </Link>
</div>


)

}
export default IndividualUser