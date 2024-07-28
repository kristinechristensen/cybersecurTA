"use client"
import { useState, useEffect } from "react"
import { getUsers } from "@/actions/getUserList"
import { UserCard } from "./uiViews/userCard"
import PageHeader from "./pageHeader"

export const TempUserList = ()=>{
    const [users, setUsers] = useState([]);
    const getData = async()=>{
        const values = await getUsers();
        const resp = JSON.parse(values);
        console.log(resp)
        setUsers([...resp]);
    }
    useEffect(() => {
        getData();
    }, [])

    return (
        <div>
            <PageHeader title="Participants" />
            <UserCard userList={users} />
        </div>

    )
}