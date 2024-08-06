"use client"
import { useState } from "react";
import { useEffect } from "react";
import { useTransition } from "react";
import { getSchool, updateSchool, insertSchool } from "@/actions/manageSchools";
import PageHeader from "./pageHeader";
import Image from "next/image";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation"


// 3 actions get school, update, and insert
//create a function to get School Information 
const ManageSchool = ({ update = false, id }) => {
  const router = useRouter();
  {/* Display Basic School Info */ }
  const [schoolName, setSchoolName] = useState("");
  const [schoolsAddress, setSchoolsAddress] = useState("");
  const [schoolCity, setSchoolCity] = useState("");
  const [schoolState, setSchoolState] = useState("");
  const [schoolZip, setSchoolZip] = useState("");
  const [schoolPhoto, setSchoolPhoto] = useState("");
  const [schoolDesc, setSchoolDesc] = useState("");
  const [pending, startTransition] = useTransition();
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    if (!update) return;  //false value for update - will not need to do jump out of the useEffect
    startTransition(() => {
      getSchool(id).then((data) => {
        data = JSON.parse(data);
        if(data.error && data.error=="Not Logged in") {
          router.push('/')
          return null;
        }
        if (data.error) {
          setError(data.error)
        }
        else {
          const school = data.school;
          setSchoolName(school.name);
          setSchoolsAddress(school.sAddress);
          setSchoolCity(school.city);
          setSchoolState(school.state)
          setSchoolZip(school.zip);
          setSchoolPhoto(school.photo);
          setSchoolDesc(school.desc);
        }
      })
    })
  }, []
  )

  const formSubmit = (e) => {
    e.preventDefault();
    setError("");
    setSuccess("")

    startTransition(() => {
      if (update) {
        updateSchool(id, schoolName, schoolsAddress, schoolCity, schoolState, schoolZip, schoolPhoto, schoolDesc).then(value => {
          if (value.success) {
            setSuccess(value.success);
          }
          else {
            setError(value.error);
          }
        })
      }
      else {
        insertSchool(schoolName, schoolsAddress, schoolCity, schoolState, schoolZip, schoolPhoto, schoolDesc).then(value => {
          if (value.success) {
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

    <div>
      <PageHeader title={update?`Edit School: ${schoolName}`:"Add School"} />

    <div className="flex flex-wrap mt-9">
     <div className="md:w-1/2 sm:w-full px-24 flex flex-col justify-start items-center">
         <Image src={schoolPhoto || '/pos/ask.png'} alt={schoolName} width={400} height={400} className="rounded"/> 
     </div>
     <div className="md:w-1/2 sm:w-full px-24 flex flex-col items-center justify-start">

      <form onSubmit={formSubmit} style={{ flexDirection: 'column', padding: '0' }}>
        {/* School Info */}
        <div style={{margin:'0', padding:'0'}}>
          <label>School Name:</label>
          <input type="text" value={schoolName} onChange={(e) => setSchoolName(e.target.value)} />
        </div>
        <div style={{margin:'0', padding:'0'}}>
          <label>School Address:</label>
          <input type="text" value={schoolsAddress} onChange={(e) => setSchoolsAddress(e.target.value)} />
        </div>
        <div style={{margin:'0', padding:'0'}}>
          <label>City:</label>
          <input type="text" value={schoolCity} onChange={(e) => setSchoolCity(e.target.value)} />
        </div>
        <div style={{margin:'0', padding:'0'}}>
          <label>State:</label>
          <input type="text" value={schoolState} onChange={(e) => setSchoolState(e.target.value)} />
        </div>
        <div style={{margin:'0', padding:'0'}}>
          <label>Zip Code:</label>
          <input type="text" value={schoolZip} onChange={(e) => setSchoolZip(e.target.value)} />
        </div>
        <div style={{margin:'0', padding:'0'}}>
          <label>School Photo:</label>
          <input type="text" value={schoolPhoto} onChange={(e) => setSchoolPhoto(e.target.value)} />
        </div>
        <div style={{margin:'0', padding:'0'}}>
          <label>School Description:</label>
          <textarea value={schoolDesc} onChange={(e) => setSchoolDesc(e.target.value)} />
        </div>
        {error && (
          <div className="bg-rose-500/15 p-3 rounded-md flex items-center justify-between gap-x-2 text-sm text-rose-500 w-full">
            <p className="">{error}</p>
          </div>
        )}
        {success && (
          <div className="bg-emerald-500/15 p-3 rounded-md flex items-center justify-between gap-x-2 text-sm text-emerald-500 w-full">
            <p className="">{success}</p>
        </div>
        )}

        <Button type="submit" variant="custom" className="w-full my-8">Submit</Button>

      </form>
      </div>
    </div>
    </div>
  )
}

export default ManageSchool;





