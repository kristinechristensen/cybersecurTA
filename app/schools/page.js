"use client"
import SchoolList from "@/components/schoolList";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";



const showAllSchools = ()=> {
    // const {data:session} = useSession();
    // const router = useRouter();
    // if(!session?.user) router.push('/api/auth/signin');
    return  <SchoolList />
    

}
export default showAllSchools