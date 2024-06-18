// manage user data
import connectToDB from '@/utils/database';
import User from '@/models/user';

// To pull individual users

export const GET = async(request, {params}) => {
   
    try {
        //connect to database **** 
        await connectToDB();
        const existingUser = await User.findById(params.id, "email  firstName lastName phone sAddress city state zip userType pos level cert skills");
        
   
        return new Response(JSON.stringify(existingUser), {status:200});
    }
     catch (error) {
        console.log(error);
        return new Response ("User information NOT found", {status:500});
    }
    
    
}