// manage user data
import connectToDB from '@/utils/database';
import Course from '@/models/course';

// To pull individual courses

export const GET = async(request, {params}) => {
   
    try {
        await connectToDB();
        const existingCourse = await Course.findById(params.id);
        
   
        return new Response(JSON.stringify(existingCourse), {status:200});
    }
     catch (error) {
        console.log(error);
        return new Response ("Course information NOT found", {status:500});
    }
    
}