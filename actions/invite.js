"use server";  //node.js - using server
//create token for the invite
import { generateToken,getData } from "@/utils/auth";
import { auth } from "@/auth";  //get session of current user
import connectToDB from "@/utils/database";
import User from "@/models/user";

const URL = process.env.URL; 

export const createInvite = async ({email, userType}) => {
    if(!email || !userType) {
        return {error:"Please complete all required fields"}
    }
    
    const session = await auth(); //get session data from user
//creating an invite
    if((session?.user?.userType == 1 && userType == 2) || session?.user?.userType == 0)  {    // 0 = admin; 1 = faculty; 2 = student
      
        //check to make sure user isn't in the system before issuing a token. 
        try {
            await connectToDB();
            const user = await User.findOne({email})
            if(user) {
                return {error: "Email address is already assigned to a registered user"}
            }
        }
        catch(error) {
            return {error: "Oops, something is going on. Please try again later"}
        }



        const token = generateToken({email, userType})
        //create invite link
        const invite = URL + "/register/" + token; //create route to registration page
        return {success:invite}
    } return {error:"You do not have priviledges to send an invite"}
}

export const getTokenValues = (token)=>{
    return getData(token);
}