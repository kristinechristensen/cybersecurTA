"use client"
import { useState, useEffect } from "react"
import { getUsers } from "@/actions/getUserList"
import { UserCard } from "./uiViews/userCard"
import PageHeader from "./pageHeader"

export const TempUserList = ()=>{
    const [users, setUsers] = useState([]);
    const [filteredUsers, setFilteredUsers] = useState([]);
    //type of user, pos, skills, interests and certs
    const [type, setType] = useState(-1);
    const [pos, setPos] = useState('');
    const [skills, setSkills] = useState('');
    const [certs, setCerts] = useState('');
    const [interets, setInterets] = useState('');

    const handleFilter = (value)=>{
        if(value.type){
            setType(value.type);
            let newArr = users.filter(elem=>{
                if(value.type==-1) return true;
                else return elem.userType==value.type;
            });
            // newArr = newArr.filter(elem=>elem.pos.includes(pos));
            // newArr = newArr.filter(elem=>elem.skills.includes(skills));
            // newArr = newArr.filter(elem=>elem.certs.includes(certs));
            // newArr = newArr.filter(elem=>elem.interests.includes(interests));
            setFilteredUsers([...newArr]);
        }else if(value.type){
            
        }
        // newArr = newArr.filter(elem=>elem.pos.includes(pos));
        // newArr = newArr.filter(elem=>elem.skills.includes(skills));
        
    }
    const handleFilterType = (value)=>{
        setType(value);
        let newArr = users.filter(elem=>{
            if(value==-1) return true;
            else return elem.userType==value;
        });
        // newArr = newArr.filter(elem=>elem.pos.includes(pos));
        // newArr = newArr.filter(elem=>elem.skills.includes(skills));
        setFilteredUsers([...newArr]);
    }

    const getData = async()=>{
        const values = await getUsers();
        const resp = JSON.parse(values);
        setUsers([...resp]);
        setFilteredUsers([...resp]);
    }
    
    useEffect(() => {
        getData();
    }, [])

    return (
        
        <div>
            <PageHeader title="Participants" />

            <select value={type} onChange={(e)=>{handleFilter({type: e.target.value})}}>
                <option value="-1">All</option>
                <option value="0">Admin</option>
                <option value="1">Faculty</option>
                <option value="2">Student</option>
            </select>

            
            <UserCard userList={filteredUsers} />
        </div>

    )
}