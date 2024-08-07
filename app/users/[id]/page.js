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

const getUserType =(userType)=>{
    switch (userType){
        case 0: 
            return  "Administrator";
        case 1:
            return "Faculty";
        case 2:
            return "Student";
        default: 
            return ""
    }}


return (

<div className="flex flex-wrap">
<PageHeader title={user?.firstName+" "+user?.lastName + ": " + getUserType(user?.userType)}/>

<div className="md:w-1/2 sm:w-full p-x-24 flex flex-column justify-end pr-20 items-center"> 
<Image src={getImg(user?.pos)} alt={user?.firstName} width={400} height={300} className="rounded hidden sm:block"/> 
</div>

<div className="md:w-1/2 sm:w-full p-x-24 flex flex-column items-center sm:justify-center md:justify-start">

    <div className="mt-8 sm:p-x-12 md:p-x-0">
        <h3 className="mt-2 font-semibold"> Skills: </h3>
        <ul className="ml-6">{user?.skills?.map((elem, index)=>(
            <li key={index+""+elem} className="list-image-[url(/assets/bCheck.svg)]">{elem}</li>
        ))}
        </ul>
        <h3 className="mt-2 font-semibold"> Interests: </h3>
        <ul className="ml-6">{user?.interests?.map((elem, index)=>(
            <li key={index+""+elem}>{elem}</li>
        ))}
        </ul>
        <h3 className="mt-2 font-semibold"> Certifications: </h3>
        <ul className="ml-6">{user?.certs?.map((elem, index)=>(
            <li key={index+""+elem}>{elem}</li>
        ))}
        </ul>
        <h2 className="mt-2 font-semibold">Attending</h2>
        <p className="font-medium ml-4">{school?.name}</p>
        <p className="ml-4">{school?.desc}</p>
        <h2 className="mt-2 font-semibold">Contact Information</h2>
        <p className="ml-4"> Email Address: <Link href={"mailto:"+user?.email}>{user?.email}</Link></p>
        <p className="ml-4"> {user?.linkedIn && (<Link href={user?.linkedIn}><p>LinkedIn: {user?.linkedIn}</p></Link>)}</p>
        <p className="m-4">
        <Link href="/users"><Button variant="custom">Back to Participants Listing </Button> </Link></p>
    </div>
</div>



</div>


)

}
export default IndividualUser