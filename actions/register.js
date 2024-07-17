"use server"
import { getData } from "@/utils/auth"; //use token values - not user input values
import { hashPassword } from "@/utils/userAccess";
import User from "@/models/user";
import connectToDB from "@/utils/database";

//creates the user
const userRegistration = async (token, password, firstName,lastName,school) =>{
    if (!token || !firstName || !lastName || !school) return {error: "Required data missing" }

    const userData = getData(token); //email and userType

    if (userData) { //checking to see if the token is valid - if user tries to change it, it will be empty if it is empty then it is not
        try {
            await connectToDB(); 
            const securePassword = await hashPassword(password);
            const user = new User({password:securePassword, email:userData.email, userType:userData.userType,  firstName, lastName, school})
            console.log("Getting Stuck Here - Frustration")
            await user.save();
            return {success:"User has been created"}
               
        }
        catch(error){
            console.log(error);
            return {error: "User not created - error "}
            
        }
    }
    else {
        return {error:"Trying to Hack Us?? Shame on you!"}
    }

}

export default userRegistration;
