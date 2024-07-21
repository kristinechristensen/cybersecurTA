"use client"
import { useState } from "react"
import { useEffect } from "react"
import { useTransition } from "react"
import { getSchools } from "@/actions/getSchools";
import { getCourse, insertCourse, updateCourse } from "@/actions/manageCourses";

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
      setError(" ");
      setSuccess(" ");

      startTransition(()=>{
        if(update){
           updateCourse(id, courseTitle,courseCRN, courseDesc,courseLevel,coursenTA).then(value =>{
            if(value.success) {
                setSuccess(value.success);   
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
      {success}{error}
      <button type="submit">Submit</button>
    </form>

  )


}

export default ManageCourse;