//create a component that can be used to show the user various profile info
import { FaSkull } from "react-icons/fa";
//update data is a call back function - updateCerts, updateSkills, updateInterests
// hookFunction - call back - setUpdateCerts, setUpdateSkills, setUpdateInterests

const ListMaker = ({data, updateData, hookFunction})=>{

    return(
        <div>
            {data.map((elem,index)=> {

            return(
            <div key={elem}>
                    {elem}
            {/* anonymous function prevents the call to the function when rendered data */}
            <button onClick={()=>{updateData(data, elem, hookFunction)}}>&nbsp;&nbsp;<FaSkull /></button>        
            </div>)

            })          
            }
            

        </div>
    )
    

}

export default ListMaker;