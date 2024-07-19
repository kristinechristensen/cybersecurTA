"use client"
import { useState } from "react"; 
import { useEffect } from "react";
import { useTransition } from "react";
import School from "@/models/school";
import { getSchool, updateSchool, insertSchool } from "@/actions/manageSchools";



// 3 actions get school, update, and insert
//create a function to get School Information 
const ManageSchool =({update=false, id})=>{

    {/* Display Basic School Info */}
    const [schoolName, setSchoolName] = useState("");
    const [schoolsAddress, setSchoolsAddress] = useState("");
    const [schoolCity, setSchoolCity] = useState("");
    const [schoolState, setSchoolState] = useState("");
    const [schoolZip, setSchoolZip] = useState("");
    const [schoolPhoto, setSchoolPhoto] = useState("");
    const [schoolDesc, setSchoolDesc] = useState(""); 
    const [pending, startTransition] = useTransition();
    const[success, setSuccess] = useState("");
    const[error, setError] = useState("");

    useEffect(() => {
      if(!update) return;  //false value for update - will not need to do jump out of the useEffect
        startTransition(() => {
         getSchool(id).then((data)=> {
                data = JSON.parse(data);
                
                if (data.error) {
                    setError(data.error)
                }
                else {
                 setSchoolName(school.name);
                 setSchoolsAddress(school.sAddress);
                 setSchoolCity(school.city);
                 setSchoolZip(school.zip);
                 setSchoolPhoto(school.photo);
                 setSchoolDesc(school.desc);   
                }
            })
})
}, []
)

const formSubmit = (e)=>{
    e.preventDefault();
    setError(" ");
    setSuccess(" ")
    
    startTransition(()=>{
        if(update){
           updateSchool(id, schoolName, schoolsAddress, schoolCity, schoolState, schoolZip, schoolPhoto, schoolDesc).then(value =>{
            if(value.success) {
                setSuccess(value.success);   
            }
            else {
                setError(value.error);
            }
        })
      }
      else {
        insertSchool(schoolName, schoolsAddress, schoolCity, schoolState,schoolZip, schoolPhoto, schoolDesc).then(value =>{
          if(value.success) {
              setSuccess(value.success);   
          }
          else {
              setError(value.error);
          }
      })
      }
        
    });
}

    return (
      <form onSubmit={formSubmit}>
      {/* School Info */}
      <div>
        <label>School Name:</label>
        <input type="text" value={schoolName} onChange={(e) => setSchoolName(e.target.value)} />
      </div>
      <div>
        <label>School Address:</label>
        <input type="text" value={schoolsAddress} onChange={(e) => setSchoolsAddress(e.target.value)} />
      </div>
      <div>
        <label>City:</label>
        <input type="text" value={schoolCity} onChange={(e) => setSchoolCity(e.target.value)} />
      </div>
      <div>
        <label>State:</label>
        <input type="text" value={schoolState} onChange={(e) => setSchoolState(e.target.value)} />
      </div>
      <div>
        <label>Zip Code:</label>
        <input type="text" value={schoolZip} onChange={(e) => setSchoolZip(e.target.value)} />
      </div>
      <div>
        <label>School Photo:</label>
        <input type="text" value={schoolPhoto} onChange={(e) => setSchoolPhoto(e.target.value)} />
      </div>
      <div>
        <label>School Description:</label>
        <textarea value={schoolDesc} onChange={(e) => setSchoolDesc(e.target.value)} />
      </div>
      <button type="submit">Submit</button>
      {success}{error}
    
    </form>
    )   
}

export default ManageSchool;


    
    
    
    