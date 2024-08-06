"use server"
import connectToDB from "@/utils/database"
import User from "@/models/user"
import {auth} from "@/auth"
import School from "@/models/school"




//get individual users 
export const getUser = async(id) => {
    const session = await auth();
    if(!session?.user) return JSON.stringify({error:"Not Logged in"});


    if (!id) return JSON.stringify({error:"What User are you looking for?"})  
   
    try {
        await connectToDB();
        const user = await User.findById(id);
        const school = await School.findById(user.school);
        return JSON.stringify({user, school})
    }
    catch(error) {
        console.log(error)
        return JSON.stringify({error:"User Not Found"})        
    }
}

// retrieve all users
export const getUsers = async() => {
    const session = await auth();
    if(!session?.user) return JSON.stringify({error: "Not Logged in"})
    try {
        await connectToDB();
        const users = await User.find({}).populate('school'); 
        return JSON.stringify(users)
    }
    catch(error) {
        console.log(error);
        return JSON.stringify({error:"Users Cannot Be Retrieved"})        
    }
}

// retrieve users from specific schools
export const getUsersbySchool = async({id}) => {
    const session = await auth();
    if(!session?.user) return {error: "Not Logged in"}
    try {
        await connectToDB();
        const usersBySchool = await User.find({school:id}); 
        return JSON.stringify(usersBySchool)
    }
    catch(error) {
        return {error:"Users Cannot Be Retrieved"}        
    }
}

