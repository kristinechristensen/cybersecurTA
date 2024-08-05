"use client"
import { useEffect } from "react"; //action prior to page rendering / pass values
import { useState } from "react";
import { useTransition } from "react";
import { getTokenValues } from "@/actions/invite";
import { getSchools } from "@/actions/getSchools";
import userRegistration from "@/actions/register";
import { useRouter } from "next/navigation";

  
    const RegisterUser = ({ params }) => {
    const token = params.token;
    const [pending, startTransition] = useTransition();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [school, setSchool] = useState("");
    const [schoolList, setSchoolList] = useState([]);
    const [userType, setUserType] = useState(2);  
    const[success, setSuccess] = useState("");
    const[error, setError] = useState("");


    const router = useRouter();
    //check for a valid token
    useEffect(() => {
        startTransition(() => {  //parse the token and get school list from db 

            getSchools().then((data) => {
                data = JSON.parse(data); 
                setSchoolList([...data]);
                setSchool(data[0]._id)
            });
            getTokenValues(token).then((data) => {
                setEmail(data.email);
                setUserType(data.userType);
            })
        }
        )
    },
    [] //run function once 
    )
   
    //register function

    const registerHandler = (e)=>{
        e.preventDefault();
        setError("");
        setSuccess("")
        
        startTransition(()=>{
            //create a server function or API end-point
            userRegistration(token, password, firstName, lastName, school).then(value =>{
                if(value.success) {
                    setSuccess(value.success);
                    router.push("/api/auth/signin")

                }
                else {
                    setError(value.error);
                }
            })
            
        });
    }


    return (
        //create form 

        <form onSubmit={registerHandler}>
            <input type="text" name="email" value={email} disabled />  {/*coming from the token */}
            <input type="text" name="firstName" value={firstName} onChange={(e) => { setFirstName(e.target.value) }} />
            <input type="text" name="lastName" value={lastName} onChange={(e) => { setLastName(e.target.value) }} />
            {/*map the school  */}
            <select value={school} onChange={(e) => { setSchool(e.target.value) }}>
                {schoolList.map((elem,index) => (
                    <option value={elem._id} key={index}>{elem.name}</option>
                ))}
            </select>
            <input type="password" name="password" value={password}  onChange={(e) => { setPassword(e.target.value) }} /> 
            {/* display whether registration was successful or not */}
            {success} {error}    

            <input type="submit" value="Register" />
        </form>
    )
}

export default RegisterUser;
