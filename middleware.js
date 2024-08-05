import { auth } from "./auth";
import { NextResponse } from "next/server";

export default auth((req)=>{

    const path=req.nextUrl.pathname;
    const auth=req.auth;
    const splittedPath = path.split('/');
    
    if(path==="/api/auth/signin" && auth?.user) {
        req.nextUrl.pathname = "/";
        return NextResponse.redirect(new URL("/", req.url))
    }

    else if((splittedPath[1] === "/users" || path.includes("/schools") || path.includes("/profile")) && !(auth?.user)){
        req.nextUrl.pathname = "/";
        return NextResponse.redirect(new URL("/", req.url))
    }





})

export const config = {
    matcher: ["/((?!.+\\.[\\w]+$|_next).*)", '/', '/(api|trpc)(.*)'],
  }