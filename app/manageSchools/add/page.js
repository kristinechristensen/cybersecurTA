"use client"
import ManageSchool from "@/components/manageSchools";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";




const ShowAllSchools = ()=> {
    const {data:session} = useSession();
    const router = useRouter();
    if(!(session?.user)){
        router.push('/');
    }
    
    return  <ManageSchool/>
    

}
export default ShowAllSchools