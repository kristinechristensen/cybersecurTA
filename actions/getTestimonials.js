//server action to retrieve school information
"use server";
import connectToDB from "@/utils/database";
import User from "@/models/user";
import { auth } from "@/auth";

export const getTestimonials = async()=>{

    try {
        const session = await auth();
        if(!session?.user) return JSON.stringify({error: 'Not Logged in'});
        await connectToDB();
        const testimonials = await User.find({}).populate('school'); 
        return JSON.stringify(testimonials)
    }
    catch(error) {
        console.log(error.message)
    }
    return{}  
}
