"use client"
import { useEffect, useState } from "react"
import { getUser } from "@/actions/getUserList"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import PageHeader from "@/components/pageHeader"
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

const IndividualUser = ({params})=> {

const [user, setUser] = useState({});
const [school, setSchool] = useState({});
const router = useRouter();
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

<div className="flex flex-wrap">
<PageHeader title={user?.firstName+" "+user?.lastName}/>
<div className="md:w-1/2 sm:w-full p-x-24 flex flex-column justify-center items-center"> 
<Image src={getImg(user?.pos)} alt={user?.firstName} width={300} height={300} className="rounded"/> 
</div>

<div className="md:w-1/2 sm:w-full p-x-24 flex flex-column items-center sm:justify-center md:justify-start">
    <div className="sm:p-x-12 md:p-x-0">
        <h3> Skills: </h3>
        <ul>{user?.skills?.map((elem, index)=>(
            <li key={index+""+elem} className="list-image-[url(/assets/bCheck.svg)]">{elem}</li>
        ))}
        </ul>
        <h3> Interests: </h3>
        <ul>{user?.interests?.map((elem, index)=>(
            <li key={index+""+elem}>{elem}</li>
        ))}
        </ul>
        <h3> Certifications: </h3>
        <ul>{user?.certs?.map((elem, index)=>(
            <li key={index+""+elem}>{elem}</li>
        ))}
        </ul>
        <h2 className="font-bold">Attending</h2>
        <p>{school?.name}</p>
        <p>{school?.desc}</p>
        <h2>Contact</h2>
        {user?.linkedIn && (<Link href={user?.linkedIn}><p>{user?.linkedIn}</p></Link>)}
        <Link href={"mailto:"+user?.email}><p>{user?.email}</p></Link>
        <p className="m-4">
        <Link href="/users"><Button variant="custom">Back to Participants Listing </Button> </Link></p>
    </div>
</div>



</div>


)

}
export default IndividualUser