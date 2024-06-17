// manage user data
import connectToDB from '@/utils/database'
import User from '@/models/user'
import {hashPassword} from '@/utils/userAccess'
//import {generateToken} from '@/utils/auth'

//Functionality => create, read, and update user information

//*********** CREATE USER

export const POST = async(request) => {
 //destructing JSON values from request
    const {email, password, firstName, lastName, phone, sAddress, city, state, zip, userType, pos, level,cert, skills} = await request.json();    

    //Testing
    console.log(email, password, firstName, lastName, phone, sAddress, city, state, zip, userType, pos, level,cert, skills)

    const hashPW = await hashPassword(password);

    if(email && hashPW && firstName && lastName && phone && sAddress && city && state && zip && userType && pos && level &&cert && skills) {

        try {
            await connectToDB();
            const user = new User({email, password:hashPW, firstName, lastName, phone, sAddress, city, state, zip, userType, pos, level,cert, skills});

            await user.save();

            return new Response(JSON.stringify(user), {status:200});

        } catch (error) {
            console.log(error);
            return new Response("Failed to create user, try again later", {status:500});
        }
    }
    else {
        return new Response("Failed to create user, specify all missing values", {status:400});
    }
}

export const GET = ()=>{
    return new Response("Is it Working?", {status:200});
}




export const PUT = async(request) => {
    const {id, email, password, firstName, lastName, phone, sAddress, city, state, zip, pos, level,cert, skills} = await request.json();   

    try {
        const existingUser = await User.findOne({email});

        let hashPW; 
        
        if (password) {
            hashPW = await hashPassword(password);
        }  

        existingUser.password = (password)?hashPW:existingUser.password;
        existingUser.firstName = (firstName)?firstName:existingUser.firstName;
        existingUser.lastName = (lastName)?lastName:existingUser.lastName;
        existingUser.phone = (phone)?phone:existingUser.phone;
        existingUser.sAddress = (sAddress)?sAddress:existingUser.sAddress;
        existingUser.city = (city)?city:existingUser.city;
        existingUser.state = (state)?state:existingUser.state;
        existingUser.zip = (zip)?zip:existingUser.zip;
        existingUser.pos = (pos)?pos:existingUser.pos; 
        existingUser.level = (level)?level:existingUser.level;
        existingUser.cert = (cert)?cert:existingUser.cert;
        existingUser.skills = (skills)?skills:existingUser.skills;
        
        
        await existingUser.save();
        return new Response("User information updated successfully", {status:200});
    }
     catch (error) {
        console.log(error);
        return new Response ("User information NOT updated", {status:500});
    }
    
    
}