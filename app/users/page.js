"use client"
import { TempUserList } from "@/components/userList";
// import { useSession } from "next-auth/react";
// import { useRouter } from "next/navigation";



const showAllUsers = ()=> {
    // const {data:session} = useSession();
    // const router = useRouter();
    // if(!(session?.user)){ 
    //     router.push('/api/auth/signin');
    // }
    return  <TempUserList />
    

}
export default showAllUsers