"use client"
import PageHeader from "@/components/pageHeader";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { FaFish } from "react-icons/fa6";


const ShowData = ({records})=>{
    return(
        <div>
        <PageHeader title="Be Aware" phish={true}/>

        <div className="p-6">
            <p className="w-full flex items-center"> <FaFish className="mr-2 text-4xl" />
            This is a report of recent Phishing Attempts - this resource can be used in the classroom for teaching packet inspection and general cybersecurity awareness. </p>
            <div className="flex flex-wrap justify-center items center">
            {
                records.map((elem)=>{
                    const entries = Object.entries(elem);
                    console.log(elem);
                    if(!elem.title) return null;
                    return (
                        <div className="sm:w-full md:w-1/3 p-4">
                            <h2 className="text-xl font-bold">{elem.title || "No title available"}</h2>
                            <div className="p-6 bg-blue-100 rounded-lg">
                                {entries.map(([key, val]=entries)=>{
                                    if(!val || key=="title") return null;
                                    return (<p className="text-wrap break-all"><span className="font-bold">{key}:</span> {val}</p>)
                                }
                                )}
                            </div>
                        </div>
                    )
                })
            }
            </div>
            <Link href="/"><Button variant="custom"> Back to the Home Page</Button></Link>
        </div>
        </div> 
    )
}

const PhishList =  ()=>{
    const [records, setRecords] = useState([]);
    useEffect(()=>{
        const getData = async ()=>{
            try{
            const data = await fetch("https://phishstats.info:2096/api/phishing?_sort=-id");
            const dataParsed = await data.json();
            setRecords([...dataParsed]);
            }catch(error){
                alert("Something happened, not phish for you");
            }
        }
        getData();
    }, [])

    return <ShowData records={records}/>
}
export default PhishList;


