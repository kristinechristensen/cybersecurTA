//server action to retrieve school information
"use server";
import connectToDB from "@/utils/database";
import User from "@/models/user";

export const getTestimonials = async()=>{

    try {
        await connectToDB();
        const testimonials = await User.find({}).populate('school'); 
        return JSON.stringify(testimonials)
    }
    catch(error) {
        console.log(error.message)
        return JSON.stringify({error:error});
    }
}
