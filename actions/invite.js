"use server";  //node.js - using server
//create token for the invite
import { generateToken,getData } from "@/utils/auth";
import { auth } from "@/auth";  //get session of current user
const URL = process.env.URL; 

export const createInvite = async ({email, userType}) => {
    if(!email || !userType) {
        return {error:"Please complete all required fields"}
    }
    
    const session = await auth(); //get session data from user
//creating an invite
    if(session?.user?.userType == 1)  {    // 0 = admin; 1 = faculty; 2 = student
        const token = generateToken({email, userType})
        //create invite link
        const invite = URL + "/register/" + token; //create route to registration page
        return {success:invite}
    } return {error:"You do not have priviledges to send an invite"}
}

export const getTokenValues = (token)=>{
    return getData(token);
}