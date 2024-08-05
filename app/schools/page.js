"use client"
import SchoolList from "@/components/schoolList";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";




const showAllSchools = ()=> {
//     const {data:session} = useSession();
//     const router = useRouter();
//     useEffect(()=> {
//         if(!(session?.user)){
//           router.push('/');
//         }
//     },[]
// )

    
  
    return  <SchoolList />
    

}
export default showAllSchools