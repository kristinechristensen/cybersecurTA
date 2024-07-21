"use server"
import connectToDB from "@/utils/database"
import User from "@/models/user"
import {auth} from "@/auth"



//get individual users 
export const getUser = async(id) => {
    const session = await auth();
    if(!session?.user) return {error:"You have to be logged in to se a user profile"};


    if (!id) return {error:"What User are you looking for?"}  
   
    try {
        await connectToDB();
        const user = await User.findById(id);
        return JSON.stringify(user)
    }
    catch(error) {
        return {error:"Course Not Found"}        
    }
}

// retrieve all users
export const getUsers = async() => {
    const session = await auth();
    if(!session?.user) return {error: "You have to be logged in to see a listing of our users"}
    try {
        await connectToDB();
        const users = await User.find({}).populate('school'); 
        return JSON.stringify(users)
    }
    catch(error) {
        return {error:"Users Cannot Be Retrieved"}        
    }
}

// retrieve users from specific schools
export const getUsersbySchool = async({id}) => {
    const session = await auth();
    if(!session?.user) return {error: "You have to be logged in to see a listing of users by school"}
    try {
        await connectToDB();
        const usersBySchool = await User.find({school:id}); 
        return JSON.stringify(usersBySchool)
    }
    catch(error) {
        return {error:"Users Cannot Be Retrieved"}        
    }
}

