"use client"
import { useState } from "react"; 
import { useEffect } from "react";
import { useTransition } from "react";
import { useRouter } from "next/navigation"
import csInterests from "@/userData/interests";
import csSkills from "@/userData/skills";
import csPOS from "@/userData/pos";
import csCerts from "@/userData/certs";
import ListMaker from "./showList";
import { getUser } from "@/actions/updateUser";
import { updateUser } from "@/actions/updateUser";
import { Button } from "./ui/button";
import { ImProfile } from "react-icons/im";



const UpdateUser =()=>{

  const router = useRouter();
    {/* Display Basic User Info */}
    const [firstName, setFirstName] = useState("");{/*read only */}
    const [lastName, setLastName] = useState("");{/*read only */}
    const [email, setEmail] = useState("");{/*read only */}
    const [gmail, setGmail] = useState("");{/*read only */}
    const [password, setPassword] = useState("");
    const [school, setSchool] = useState(""); {/*read only */}
    const [userType, setUserType] = useState();  {/*read only */}
    
    {/*  User Contact Info */}     
    const[phone,setPhone] = useState("");
    const[sAddress,setsAddress] = useState("");
    const[city,setCity] = useState("");
    const[state,setState] = useState("");
    const[zip,setZip] = useState();
    
    {/* Educational Info */}
    const[level,setLevel] = useState("");
    const[bio,setBio] = useState("");
    const[testimony,setTestimony] = useState("");
    const[linkedIn,setLinkedIn] = useState("");

    const[updatePOS, setupdatePOS] = useState("")
    const[updateSkills, setupdateSkills] = useState([])
    const[updateInterests, setupdateInterests] = useState([])
    const[updateCerts, setupdateCerts] = useState([])
    {/* User Messages */}
    const [pending, startTransition] = useTransition();
    const[success, setSuccess] = useState("");
    const[error, setError] = useState("");

    useEffect(() => {
        startTransition(() => {
        
            getUser().then((data)=> {
                
                data = JSON.parse(data);
                if(data.error && data.error=="Not Logged in") {
                  router.push('/')
                  return null;
              }
                if (data.error) {
                    setError(data.error)
                }
                else {
                    const user = data.success;
                    const school = data.school;
                    setEmail(user.email);
                    setGmail(user.emailG);
                    setFirstName(user.firstName);
                    setLastName(user.lastName);
                    setSchool(school.name);
                    const type = (user.userType===0)?'Admin':((user.userType === 1)?'Faculty':'Student');
                    setUserType(type);
                    setPhone(user.phone);
                    setsAddress(user.sAddress);
                    setCity(user.city);
                    setState(user.state);
                    setZip(user.zip);
                    setupdatePOS(user.pos);
                    setLevel(user.level);
                    setupdateSkills([...user.skills]);
                    setupdateInterests([...user.interests]);
                    setupdateCerts([...user.certs]);
                }
            })

})
}, []
)


const formSubmit = (e)=>{
    e.preventDefault();
    setError("");
    setSuccess("")
    
    startTransition(()=>{
        //create a server function or API end-point
        updateUser(password, phone, gmail, sAddress, city, state, zip, updatePOS, level, updateSkills, updateCerts, updateInterests, bio, testimony, linkedIn).then(value =>{
            if(value.success) {
                setSuccess(value.success);
                
            }
            else {
                setError(value.error);
            }
        })
        
    });
}





//function to update list - list of options, selected option, hook function removed
//call back function 
    const updateList = (data, elem, hookFunction)=>{
        const newArr = data.filter((element)=> element!=elem)
        hookFunction(newArr);  
    }


    return (
        

        <form onSubmit={formSubmit}>
        {/* Basic User Info */}
        <div className="md:w-1/2 sm:w-full">
          <div>
            <label>First Name:</label>
            <input type="text" value={firstName} readOnly disabled/>
          </div>
          <div>
            <label>Last Name:</label>
            <input type="text" value={lastName} readOnly />
          </div>
          <div>
            <label>Email:</label>
            <input type="email" value={email} readOnly />
          </div>
          <div>
            <label>Google Mail:</label>
            <input type="email" value={gmail} onChange={(e) => setGmail(e.target.value)} autoComplete="new-password"/>
          </div>
          <div>
            <label>Password:</label>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} autoComplete="new-password"/>
          </div>
          <div>
            <label>School:</label>
            <input type="text" value={school} readOnly />
          </div>
          <div>
            <label>User Type:</label>
            <input type="text" value={userType} readOnly />
          </div>
          {/* User Contact Info */}
          <div>
            <label>Phone:</label>
            <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} />
          </div>
          <div>
            <label>Street Address:</label>
            <input type="text" value={sAddress} onChange={(e) => setsAddress(e.target.value)} />
          </div>
          <div>
            <label>City:</label>
            <input type="text" value={city} onChange={(e) => setCity(e.target.value)} />
          </div>
          <div>
            <label>State:</label>
            <input type="text" value={state} onChange={(e) => setState(e.target.value)} />
          </div>
          <div>
            <label>Zip:</label>
            <input type="text" value={zip} onChange={(e) => setZip(e.target.value)} />
          </div>
          {/* Educational Info */}
         
        </div>
        
          <div className="md:w-1/2 sm:w-full">
          <div>
            <label>Program of Study (POS):</label>
            {/*map the pos  */}
            <select value={updatePOS} onChange={(e) => {if(e.target.value != "") setupdatePOS(e.target.value) }}>
            <option value=""></option>
                  {csPOS.map((elem,index) => (
                      <option value={elem} key={index}>{elem}</option>
                  ))}
           </select>
          </div>
          <div>
            <label>Level:</label>
            <select value={level} onChange={(e) => {if(e.target.value != "") setLevel(e.target.value)}}>
                  <option value=""></option>
                  <option value="Associate's Degree"> Associate's Degree</option>
                  <option value="Bachelor's Degree"> Bachelor's Degree</option>
                  <option value="Master's Degree"> Master's Degree</option>
                  <option value="Doctoral Degree"> Doctoral Degree</option>
            </select>
          
          </div>
          <div>
            <label>Skills:</label>
          
           <ListMaker data={updateSkills} hookFunction={setupdateSkills} updateData={updateList} />
           {/*map the skills  */}
            <select onChange={(e) => { if(e.target.value != "" && !updateSkills.includes(e.target.value))  {setupdateSkills([...updateSkills, e.target.value]) }}}>
              <option value=""></option>
                  {csSkills.map((elem,index) => (
                      <option value={elem} key={index}>{elem}</option>
                  ))}
           </select>
          
          </div>
          <div>
            <label>Certifications:</label>
          
            <ListMaker data={updateCerts} hookFunction={setupdateCerts} updateData={updateList} />
               {/*map the certifications  */}
            <select onChange={(e) => {if(e.target.value != "" && !updateCerts.includes(e.target.value) ) setupdateCerts([...updateCerts, e.target.value]) }}>
                 <option value=""></option>
                  {csCerts.map((elem,index) => (
                      <option value={elem} key={index}>{elem}</option>
                  ))}
           </select>
          </div>
          <div>
            <label>Interests:</label>
            <ListMaker data={updateInterests} hookFunction={setupdateInterests} updateData={updateList} />
            <select onChange={(e) => {if(e.target.value != ""&& !updateInterests.includes(e.target.value))   setupdateInterests([...updateInterests, e.target.value]) }}>
            <option value=""></option>
                  {csInterests.map((elem,index) => (
                      <option value={elem} key={index}>{elem}</option>
                  ))}
           </select>
          </div>
          <div>
            <label>Bio:</label>
            <textarea value={bio} onChange={(e) => setBio(e.target.value)} />
          </div>
          <div>
            <label>Testimony:</label>
            <textarea value={testimony} onChange={(e) => setTestimony(e.target.value)} />
          </div>
          <div>
            <label>LinkedIn:</label>
            <input type="text" value={linkedIn} onChange={(e) => setLinkedIn(e.target.value)} />
          </div>
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
        <Button type="submit" variant="custom" className="mt-6 w-full">Update My Information</Button>
      </form>
    )
    
}

export default UpdateUser;


    
    
    
    