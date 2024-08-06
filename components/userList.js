"use client"
import { useState, useEffect } from "react"
import { getUsers } from "@/actions/getUserList"
import { UserCard } from "./uiViews/userCard"
import PageHeader from "./pageHeader"
import { useRouter } from "next/navigation"
import { Button } from "./ui/button"
import csPOS from "@/userData/pos"
import csSkills from "@/userData/skills"
import csCerts from "@/userData/certs"
import { FcSearch } from "react-icons/fc";


export const TempUserList = ()=>{
    const [users, setUsers] = useState([]);
    const [filteredUsers, setFilteredUsers] = useState([]);
    //type of user, pos, skills, interests and certs
    const [type, setType] = useState(-1);
    const [pos, setPos] = useState(' ');
    const [skills, setSkills] = useState(' ');
    const [certs, setCerts] = useState(' ');
    const [interets, setInterets] = useState(' ');
    const router = useRouter();
    // const handleFilter = (value)=>{
    //     if(value.type){
    //         setType(value.type);
    //         let newArr = users.filter(elem=>{
    //             if(value.type==-1) return true;
    //             else return elem.userType==value.type;
    //         });
            // newArr = newArr.filter(elem=>elem.pos.includes(pos));
            // newArr = newArr.filter(elem=>elem.skills.includes(skills));
            // newArr = newArr.filter(elem=>elem.certs.includes(certs));
            // newArr = newArr.filter(elem=>elem.interests.includes(interests));
        //     setFilteredUsers([...newArr]);
        // }else if(value.type){
            
        // }
        // newArr = newArr.filter(elem=>elem.pos.includes(pos));
        // newArr = newArr.filter(elem=>elem.skills.includes(skills));
        
    // }
    const handleFilter = ()=>{
        let newArr = users.filter(elem=>{
            if(type==-1) return true;
            else return elem.userType==type;
        });
        newArr = newArr.filter(elem=>{
            if(pos===' ')return true;
            console.log(elem.pos)
            return elem.pos && elem.pos.toLowerCase().trim()==pos.toLowerCase().trim()
        });
        newArr = newArr.filter(elem=>{
            if(skills===' ')return true;
            return elem.skills.includes(skills)
        });
        newArr = newArr.filter(elem=>{
            if(certs===' ')return true;
            return elem.certs.includes(certs)
        });
        setFilteredUsers([...newArr]);
    }

    const getData = async()=>{
        const values = await getUsers();
        const resp = JSON.parse(values);
        if(resp.error && resp.error=="Not Logged in") {
            router.push('/')
            return null;
        }
        setUsers([...resp]);
        setFilteredUsers([...resp]);
    }
    useEffect(()=>{
        getData();
    }, [])

    return (
        
        <div>
            <PageHeader title="Search Participants" />

            <div className="px-24 flex flex-wrap justify-center w-full items-center">
            <div className="p-8 bg-blue-100 flex flex-wrap "> 
           
           
            <div className="md:w-1/2 sm:w-full p-6 text-xl">
                <h2 className="text-3xl font-semibold mb-4 flex items-center"> <FcSearch className="mr-2" />         Find Your Match</h2>
                <p className="mr-20">This page is designed to help you quickly locate specific groups or individuals within the <span className="bg-clip-text text-blue-900 font-semibold">CyberSecur</span><span className="bg-clip-text text-red-600 font-semibold">TA</span> community based on their roles and expertise. The set of dropdown menus allow you to refine your search based on various criteria. You can filter participants by their user type (choosing between All, Admin, Faculty, or Student), program of study, specific cybersecurity skills, and certifications. </p>
                
                <p className="mr-20 mt-6">After selecting your desired filters, simply click the "Filter" button to apply them. The page will then display a list of participant cards matching your criteria. If you wish to view all participants again, you can reset the filters by selecting "All" in each dropdown and clicking "Filter" once more. </p>
            </div>

               <div className="lg:w-1/2 md:w-full sm:w-full align-middle">
                <div className="mb-4">
                    <label>Select User Type</label>
                        <select value={type} className="w-full" onChange={(e)=>{setType(e.target.value)}}>
                            <option value={-1}>All</option>
                            <option value={0}>Admin</option>
                            <option value={1}>Faculty</option>
                            <option value={2}>Student</option>
                        </select>
                </div>
                <div className="mb-4">
                    <label>Search Program of Study</label>
                        <select value={pos} className="w-full" onChange={(e)=>{setPos(e.target.value)}}>
                            <option value=" ">All</option>
                            {csPOS.map(elem=>{
                                return <option value={elem} key={elem}>{elem}</option>
                            })}
                        </select>
                </div>
                    <div className="mb-4">
                        <label>Search Skills</label>
                        <select value={skills} className="w-full" onChange={(e)=>{setSkills(e.target.value)}}>
                            <option value=" ">All</option>
                            {csSkills.map(elem=>{
                                return <option value={elem} key={elem}>{elem}</option>
                            })}
                        </select>
                    </div>

                    <div>
                        <label>Search Certifications</label>
                        <select value={certs}  className="w-full" onChange={(e)=>{setCerts(e.target.value)}}>
                            <option value=" ">All</option>
                            {csCerts.map(elem=>{
                                return <option value={elem} key={elem}>{elem}</option>
                            })}
                        </select>
                    </div>
                    

                    <Button variant="custom" className="mt-6 w-full align-center" onClick={handleFilter}>Search for Participants</Button>
            </div>
            
            </div>
            </div>
            <UserCard userList={filteredUsers} />
        </div>

    )
}