"use client"
import { FcLock } from "react-icons/fc";



const PageHeader = ({title})=> {


return (
    <div className="w-full h-24 flex justify-center items-center bg-gradient-to-b from-cyan-500 to-blue-500 gap-x-3 " >
        <FcLock className="text-4xl"/>
       <h1 className="text-4xl text-white text-bold">   {title}</h1>
    </div>
)

}
export default PageHeader;