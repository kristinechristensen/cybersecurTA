"use client"
import { useEffect } from "react"; //action prior to page rendering / pass values
import { useState  } from "react"; 
import { InviteForm } from "@/components/inviteForm";
import { useTransition } from "react";
import { getTokenValues } from "@/actions/invite";
import { getSchools } from "@/actions/getSchools";


const RegisterUser = ({params})=> {
    const token = params.token; 
    const[pending, startTransition] = useTransition();
    const[email,setEmail] = useState("");
    const[password,setPassword] = useState("");
    const[firstName,setFirstName] = useState("");
    const[lastName,setLastName] = useState("");
    const[school,setSchool] = useState("");
    const[schoolList, setSchoolList] = useState([]);


    //check for a valid token
    useEffect(() =>{
    useTransition(()=>{
        getSchools().then((data)=>{
            setSchoolList([...data]);
        });
        getTokenValues(token).then((data)=>{
            setEmail(data.email);
            setUserType(data.userType);
        })
    }
    )})
    return (
        //create form 
        <form onSubmit={RegisterUser}>
    


            <input type="submit"/>
        </form>
        )
    }

