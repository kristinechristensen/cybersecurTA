import User from "@/models/user";
import { comparePassword } from "@/utils/userAccess";
import connectToDB from "@/utils/database";


export const POST = async(req)=>{
  const {email, password } = await req.json();
  if(!email || !password) return new Response("Please fill all the require parameters", {status: 400});
  try {
    await connectToDB();
    const user = await User.findOne({email: email}); //select request
    if(!user) return new Response("Invalid credentials", {status: 401});
    const compare = await comparePassword(password, user.password);
    if(compare){
      return new Response(JSON.stringify(user), {status: 200});
    }
    return new Response("Invalid credentials", {status:401});
  } catch (error) {
    console.log(error);
    return new Response("Unable to login, try again later", {status:500});
  }
}
