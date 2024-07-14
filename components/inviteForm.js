import { useTransition, useState } from "react";
import { createInvite } from "@/actions/invite";

export const InviteForm = ()=> {
    const[email, setEmail] = useState("");
    const[userType, setUserType] = useState(2);
    const[success, setSuccess] = useState("");
    const[error, setError] = useState("");
    const[pending, startTransition] = useTransition(); //hook to use server actions

    const submitInvite = ()=>{
        setSuccess("");  //resetting the value based on current request attempt
        setError("");
        startTransition(()=>{  
            createInvite({email, userType}).then(value=>{
                if(value.success) {
                    setSuccess(value.success);
                }
                else {
                    setError(value.error);
                }
            })
        })
    }

    return (
    //create form 
    <form onSubmit={submitInvite}>
        <input type="text" name="email" value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
        <select value={userType} onChange={(e)=>{setUserType(e.target.value)}}>
            <option value="2">Student</option>
            <option value="1">Faculty</option>
            <option value="0">Administrator</option>
        </select>
        <input type="submit"/>
    </form>
    )
}
