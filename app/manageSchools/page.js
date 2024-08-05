"use client"
import SchoolListAdmin from "@/components/schoolListAdmin";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";




const showAllSchoolsAdmin = ()=> {
    // const {data:session} = useSession();
    // const router = useRouter();
    // useEffect(()=> {
    //     if(!(session?.user)){
    //       router.push('/');
    //     }
    // },[]
// )
    return  <SchoolListAdmin/>
    

}
export default showAllSchoolsAdmin