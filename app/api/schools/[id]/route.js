// manage user data
import connectToDB from '@/utils/database';
import School from '@/models/school';

// To pull individual schools

export const GET = async(request, {params}) => {
   
    try {
        await connectToDB();
        const existingSchool = await School.findById(params.id);
        
   
        return new Response(JSON.stringify(existingSchool), {status:200});
    }
     catch (error) {
        console.log(error);
        return new Response ("School information NOT found", {status:500});
    }
}