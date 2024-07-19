"use client"
import { useState } from "react"; 
import { useEffect } from "react";
import { useTransition } from "react";
//updateSchool --import from actions



// 3 actions get school, update, and insert
//create a function to get School Information 
const UpdateSchool =({update=false, id})=>{

    {/* Display Basic School Info */}
    const [schoolName, setSchoolName] = useState("");
    const [schoolsAddress, setSchoolsAddress] = useState("");
    const [schoolCity, setSchoolCity] = useState("");
    const [schoolZip, setSchoolZip] = useState("");
    const [schoolPhoto, setSchoolPhoto] = useState("");
    const [schoolDesc, setSchoolDesc] = useState(""); 
    const [pending, startTransition] = useTransition();
    const[success, setSuccess] = useState("");
    const[error, setError] = useState("");

    useEffect(() => {
        startTransition(() => {
         getUser().then((data)=> {
                
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
        //create a server function or API end-point
        updateSchool(schoolName, schoolsAddress, schoolCity, schoolZip, schoolPhoto, schoolDesc).then(value =>{
            if(value.success) {
                setSuccess(value.success);   
            }
            else {
                setError(value.error);
            }
        })
        
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
    </form>
    )   
}

export default UpdateSchool;


    
    
    
    