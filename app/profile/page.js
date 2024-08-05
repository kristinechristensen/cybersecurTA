"use client"
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import UpdateUser from "@/components/updateProfile";
import FacultyCourseList from "@/components/facultyCourseList";
import SchoolListAdmin from "@/components/schoolListAdmin";
import PageHeader from "@/components/pageHeader";
import Image from "next/image";

const Profile = () => {
   
    // const {data:session} = useSession();
    // const router = useRouter();
    // if(!(session?.user)){
    //     router.push('/');
    //   }
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
<div>
    <PageHeader title="User Profile"/>

 <div className="flex flex-wrap">
     
     <div className="px-24 flex flex-wrap justify-center w-full items-center">
     <div> instructions to the user on updating thier informaiton</div>
     <UpdateUser />
   </div>
 </div>
    {/* <h1>Your Courses</h1>
    <FacultyCourseList/>
    <h1> Update School List</h1>    
    <SchoolListAdmin /> */}
</div>
    
)


}
export default Profile; 