"use client"
import ManageSchool from "@/components/manageSchools"
import PageHeader from "@/components/pageHeader"


export default function UpdateSchool({params}){
    return (<ManageSchool update={true} id={params?.id}/>)
}


// const ManageSchoolAdmin = ({params})=>{
//     // return <ManageSchool update={true} id={params?.id}/>
//     return <h1>Im working</h1>
    
// }
// export default ManageSchoolAdmin;