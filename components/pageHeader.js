"use client"
import { FcLock } from "react-icons/fc";
import { FaFish } from "react-icons/fa6";



const PageHeader = ({title, phish})=> {


return (
    <div className="w-full h-24 flex justify-center items-center bg-blue-900 gap-x-3 mb-6" >
        {phish?(<FaFish className="mr-2 text-4xl text-white" />):(<FcLock className="text-4xl"/>)}
       <h1 className="text-3xl text-white font-semibold">{title} </h1>
    </div>
)

}
export default PageHeader;