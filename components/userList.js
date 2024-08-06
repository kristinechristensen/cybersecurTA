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
            <PageHeader title="Participants" />

            <div className="w-full flex justify-evenly">
                <select value={type} onChange={(e)=>{setType(e.target.value)}}>
                    <option value={-1}>All</option>
                    <option value={0}>Admin</option>
                    <option value={1}>Faculty</option>
                    <option value={2}>Student</option>
                </select>
                <select value={pos} onChange={(e)=>{setPos(e.target.value)}}>
                    <option value=" ">All</option>
                    {csPOS.map(elem=>{
                        return <option value={elem} key={elem}>{elem}</option>
                    })}
                </select>
                <select value={skills} onChange={(e)=>{setSkills(e.target.value)}}>
                    <option value=" ">All</option>
                    {csSkills.map(elem=>{
                        return <option value={elem} key={elem}>{elem}</option>
                    })}
                </select>
                <select value={certs} onChange={(e)=>{setCerts(e.target.value)}}>
                    <option value=" ">All</option>
                    {csCerts.map(elem=>{
                        return <option value={elem} key={elem}>{elem}</option>
                    })}
                </select>
                <Button variant="custom" onClick={handleFilter}>Filter</Button>
                
            </div>
            <UserCard userList={filteredUsers} />
        </div>

    )
}