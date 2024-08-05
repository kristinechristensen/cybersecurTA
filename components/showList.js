//create a component that can be used to show the user various profile info
import { FaWindowClose } from "react-icons/fa";

//update data is a call back function - updateCerts, updateSkills, updateInterests
// hookFunction - call back - setUpdateCerts, setUpdateSkills, setUpdateInterests
//populate the form element. 

const ListMaker = ({data, updateData, hookFunction})=>{

    return(
        <div className="mb-8 border-2 border-blue-900">
            {data.map((elem,index)=> {

            return(
            <div key={elem} className="w-full flex justify-between text-white bg-blue-500  items-center p-2">
                    {elem}
            {/* anonymous function prevents the call to the function when rendered data */}
            <button onClick={()=>{updateData(data, elem, hookFunction)}}><FaWindowClose className="text-white text-xl" title="Remove"/></button>        
            </div>)

            })          
            }
            

        </div>
    )
    

}

export default ListMaker;