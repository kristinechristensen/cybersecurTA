"use client"
import { useState } from "react"
import { useEffect } from "react"
import { useTransition } from "react"
import { getSchools } from "@/actions/getSchools";
import { getCourse, insertCourse, updateCourse } from "@/actions/manageCourses";
import PageHeader from "./pageHeader";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";

const ManageCourse = ({ update = false, id }) => {

  { /* Display Course Information */ }
  const [courseTitle, setCourseTitle] = useState("");
  const [courseCRN, setCourseCRN] = useState("");
  const [courseDesc, setCourseDesc] = useState("");
  const [courseLevel, setCourseLevel] = useState("");
  const [coursenTA, setCoursenTA] = useState("");
  const [school, setSchool] = useState("");
  const [schoolList, setSchoolList] = useState([]);
  const [pending, startTransition] = useTransition();
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

    useEffect(() => {
    startTransition(() => {  //parse the token and get course list from db 
     if(update){
        getCourse(id).then((courseData)=> {
        courseData = JSON.parse(courseData);
        
        if (courseData.error) {
            setError(courseData.error)
        }
        else {     
         const course = courseData;
         setCourseTitle(course.title);
         setCourseCRN(course.crn);
         setCourseCRN(course.crn);
         setCourseDesc(course.desc);
         setCourseLevel(course.level);
         setCoursenTA(course.nTA);        
        }})
      }
      
        getSchools().then((data) => {
        data = JSON.parse(data);  
        setSchoolList([...data]);
        setSchool(data[0]._id)
      });
    })    
  }, [])

    const formSubmit = (e) =>{
      e.preventDefault();
      setError("");
      setSuccess("");

      startTransition(()=>{
        if(update){
           updateCourse(id, courseTitle,courseCRN, courseDesc,courseLevel,coursenTA).then(value =>{
            if(value.success) {
                setSuccess(value.success);
                router.push('/manageCourses')   
            }
            else {
                setError(value.error);
            }
        })
      }
      else {
        insertCourse(courseTitle,courseCRN, courseDesc,courseLevel,coursenTA, school).then(value =>{
          if(value.success) {
              setSuccess(value.success); 
              router.push('/manageCourses')  
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
      <PageHeader title={`Edit Course: ${courseTitle}`} />

    <div className="flex flex-wrap mt-9 w-full">
     <div className="w-full px-24 flex flex-col justify-start items-center">
    <form onSubmit={formSubmit} style={{flexDirection:'column'}}>
      <div>
        <label>Course Title:</label>
        <input type="text" value={courseTitle} onChange={(e) => setCourseTitle(e.target.value)} />
      </div>
      <div>
        <label>Course CRN:</label>
        <input type="text" value={courseCRN} onChange={(e) => setCourseCRN(e.target.value)} />
      </div>
      <div>
        <label>Course Description:</label>
        <textarea value={courseDesc} onChange={(e) => setCourseDesc(e.target.value)} />
      </div>
      <div>
        <label>Course Level:</label>
        <input type="text" value={courseLevel} onChange={(e) => setCourseLevel(e.target.value)} />
      </div>
      <div>
        <label>Course TA:</label>
        <input type="text" value={coursenTA} onChange={(e) => setCoursenTA(e.target.value)} />
      </div>
      <div>
        <label>School List:</label>
        <select value={school} onChange={(e) => { setSchool(e.target.value) }}>
          {schoolList.map((elem, index) => (
            <option value={elem._id} key={index}>{elem.name}</option>
          ))}
        </select>
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
      <Button type="submit" variant="custom" className="w-full" disabled={pending}>Submit</Button>
    </form>
    </div>
    </div>
    </div>      
  )


}

export default ManageCourse;