"use client"
import { FcLock } from "react-icons/fc";



const PageHeader = ({title})=> {


return (
    <div className="w-full h-24 flex justify-center items-center bg-blue-900 gap-x-3 mb-6" >
        <FcLock className="text-4xl"/>
       <h1 className="text-3xl text-white font-semibold">   {title}</h1>
    </div>
)

}
export default PageHeader;