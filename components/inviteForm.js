import { useTransition, useState } from "react";
import { createInvite } from "@/actions/invite";
import { useSession } from "next-auth/react";
import { FaRegCopy } from "react-icons/fa";
import { TiTick } from "react-icons/ti";
import { Button } from "./ui/button";



export const InviteForm = () => {
    const { data: session } = useSession();
    const [email, setEmail] = useState("");
    const [userType, setUserType] = useState(2);
    const [success, setSuccess] = useState("");
    const [error, setError] = useState("");
    const [copy, setCopy] = useState("");
    const [pending, startTransition] = useTransition(); //hook to use server actions

    const submitInvite = (e) => {
        e.preventDefault();
        console.log(email)
        setSuccess("");  //resetting the value based on current request attempt
        setError("");
        startTransition(() => {
            createInvite({ email, userType }).then(value => {
                if (value.success) {
                    setSuccess(value.success);
                }
                else {
                    setError(value.error);
                }
            })
        })
    }
    const handleCopy = () => {
        setCopy(success);
        navigator.clipboard.writeText(success);
        setTimeout(() => setCopy(false), 3000);
      };

    return (
        //create form 
        <form onSubmit={(e) => submitInvite(e)}>
           <label>Student Email Account</label> <input type="text" name="email" value={email} onChange={(e) => { setEmail(e.target.value) }} />

            {session?.user?.userType === 0 ? (
                <select value={userType} onChange={(e) => { setUserType(e.target.value) }}>
                    <option value="2">Student</option>
                    <option value="1">Faculty</option>
                    <option value="0">Administrator</option>
                </select>
            ) : (
                <select value={userType} onChange={(e) => { setUserType(e.target.value) }}>
                    <option value="2">Student</option>
                </select>
            )}

            <Button type="submit" variant="custom">Submit </Button>
            {success && (
            <div className="bg-emerald-500/15 p-3 rounded-md flex items-center justify-between gap-x-2 text-sm text-blue-500">
              <p className="">Link is ready click the icon to copy it!
              </p>
                <div onClick={handleCopy}>{
                    copy === success
                      ? <TiTick/>
                      : <FaRegCopy/>
                  }
                </div>
            </div>
          )}
            
            {error}
        </form>
    )
}
