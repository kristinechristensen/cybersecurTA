"use server"
//update user information 
import connectToDB from "@/utils/database"
import User from "@/models/user"
import { auth } from "@/auth"  //gets session data from user
import { hashPassword } from "@/utils/userAccess"
import School from "@/models/school"


export const getUser = async() =>{

    const session = await auth(); //get session data from user 

    if(session?.user) {
        try {
            await connectToDB();
            const user = await User.findById(session?.user?.id); 
            const school = await School.findById(user.school);

            return JSON.stringify({school:school, success:user});

        }
        catch(error) {
            console.log(error)
            return JSON.stringify({error:"Error: Could Not Get User Data"})
        }
    }
    else {
        return JSON.stringify ({error: "User is not logged in"})
    }
}

export const updateUser = async(password, phone, gmail, sAddress, city, state, zip, pos, level, skills, certs, interests, bio, testimony, linkedIn)=> {
   
    const session = await auth(); // 
    if(session?.user) {
        try {
            await connectToDB();
            const user = await User.findById(session?.user?.id); 

            //set update pasword
            if (password) {
                const passwordHash = await hashPassword(password);
                user.password = passwordHash;
            }
    //set values
            user.phone = phone;
            user.emailG = gmail;
            user.sAddress = sAddress;
            user.city = city;
            user.state =state;
            user.zip = zip;
            user.pos = pos;
            user.level = level;
            user.certs = certs;
            user.skills = skills; 
            user.interests = interests;
            user.bio = bio;
            user.testimony= testimony; 
            user.linkedIn = linkedIn; 

            await user.save();

            return {success: "Your Information Has Been Updated Successfully"};

        }
        catch(error) {
            return{error:"Error: Could Not Update Data"}
        }
    }
    else {
        return {error: "User is not logged in"}
    }



}
