"use client"
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import UpdateUser from "@/components/updateProfile";
import FacultyCourseList from "@/components/facultyCourseList";
import SchoolListAdmin from "@/components/schoolListAdmin";
import PageHeader from "@/components/pageHeader";
import Image from "next/image";
import Link from "next/link";

const Profile = () => {
   
    const {data:session} = useSession();
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
     <div className="p-6 bg-blue-100"> 
        <h2 className="text-3xl font-semibold mb-4">Personalize Your Professional Profile</h2>
        <p>To update your profile, review and modify the editable fields as needed. Your basic information is pre-filled and read-only. Update your contact details, educational information, and select your program of study and education level from the dropdowns. <span className="font-semibold">For skills, certifications, and interests, you can remove items by clicking the 'x' or add new ones using the dropdown menus. </span>Fill in your bio, testimony, and LinkedIn URL if desired. </p>
        
        <p className="mt-4">Double-check all information before clicking the "Update My Information" button at the bottom to save your changes. You'll see a confirmation message upon successful update or an error message if there's an issue. If you have any questions or problems, please contact the <Link href="mailto:cybersecurta@gmail.com" className="text-cyan-700 hover:text-red-600 font-semibold">system administrator </Link>.</p></div>
     <UpdateUser />
   </div>
 </div>
 
</div>
    
)


}
export default Profile; 