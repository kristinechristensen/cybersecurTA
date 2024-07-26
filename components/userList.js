"use client"
import { useState, useEffect } from "react"
import { getUsers } from "@/actions/getUserList"
import { UserCard } from "./uiViews/userCard"

export const TempUserList = ()=>{
    const [users, setUsers] = useState([]);
    const getData = async()=>{
        const values = await getUsers();
        const resp = JSON.parse(values);
        setUsers([...resp]);
    }
    useEffect(() => {
        getData();
    }, [])

    return (
        <div>
            <UserCard userList={users} />
        </div>

    )
}