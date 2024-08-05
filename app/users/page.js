"use client"
import { TempUserList } from "@/components/userList";
import { useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";



const showAllUsers = ()=> {
    const router = useRouter();
    const {data:session} = useSession();
      if(!(session?.user)){
        router.push('/');
      }
    return  <TempUserList />
    

}
export default showAllUsers