"use client"
import { useEffect } from "react"; //action prior to page rendering / pass values
import { useState } from "react";
import { useTransition } from "react";
import { getTokenValues } from "@/actions/invite";
import { getSchools } from "@/actions/getSchools";
import userRegistration from "@/actions/register";
import { useRouter } from "next/navigation";
import PageHeader from "@/components/pageHeader";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const RegisterUser = ({ params }) => {
    const token = params.token;
    const [pending, startTransition] = useTransition();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [school, setSchool] = useState("");
    const [schoolList, setSchoolList] = useState([]);
    const [userType, setUserType] = useState(2);
    const [success, setSuccess] = useState("");
    const [error, setError] = useState("");


    const router = useRouter();
    //check for a valid token
    useEffect(() => {
        startTransition(() => {  //parse the token and get school list from db 

            getSchools().then((data) => {
                data = JSON.parse(data);
                setSchoolList([...data]);
                setSchool(data[0]._id)
            });
            getTokenValues(token).then((data) => {
                setEmail(data.email);
                setUserType(data.userType);
            })
        }
        )
    },
        [] //run function once 
    )

    //register function

    const registerHandler = (e) => {
        e.preventDefault();
        setError("");
        setSuccess("")

        startTransition(() => {

            userRegistration(token, password, firstName, lastName, school).then(value => {
                if (value.success) {
                    setSuccess(value.success);
                    router.push("/api/auth/signin")

                }
                else {
                    setError(value.error);
                }
            })

        });
    }


    return (
        //create form 
        <div>
            <PageHeader title="Congratulations, Future Educator!" />
            <div className="px-24 flex flex-wrap justify-center w-full items-center">
                <div className="p-6 bg-blue-100 flex flex-wrap mb-8">
                    <div className="md:w-1/2 sm:w-full p-6">
                        <h2 className="text-3xl font-semibold mb-4">Welcome to <span className="bg-clip-text text-blue-900 font-semibold">CyberSecur</span><span className="bg-clip-text text-red-600 font-semibold">TA</span> !</h2>

                        
                        <p>
                            <Image
                                src="/assets/congratsTA.jpg"
                                width="400"
                                height="400"
                                align="left"
                                alt="Students working together"
                                className="mr-8 rounded-lg"
                            />

                            This invitation marks the start of your cybersecurity education journey! You're joining a collaborative community of faculty and learners and will gain  access to valuable resources and connections. This platform will connect you with like-minded individuals, seasoned faculty, and resources that can enance your skills and knowledge. Take a moment to carefully fill out all fields in the regisratio form.</p>


                        <p className="mt-6">This is your first step towards shaping the future of cybersecurity education!</p>
                        <p>Let's get started!</p>
                    </div>



                    <div className="lg:w-1/2 md:w-full sm:w-full">
                        <form onSubmit={registerHandler} className=" block">

                            <div className="mt-0 pt-0">
                                <label className="m-1">Email</label>
                                <input type="text" name="email" value={email} disabled className="font-medium text-blue-900 bg-blue-300" />
                                {/*coming from the token */}
                            </div>


                            <div className="mt-0 pt-0">
                                <label className="m-1">First Name</label>
                                <input type="text" className="w-full" name="firstName" value={firstName} onChange={(e) => { setFirstName(e.target.value) }} />
                            </div>

                            <div className="mt-0 pt-0">
                                <label className="m-1">Last Name</label>
                                <input type="text" name="lastName" value={lastName} autoComplete="new-password" className="w-full" onChange={(e) => { setLastName(e.target.value) }} />
                            </div>

                            <div className="mt-0 pt-0">
                                <label className="m-1">School You Are Attending</label>
                                {/*map the school  */}
                                <select className="w-full" value={school} onChange={(e) => { setSchool(e.target.value) }}>
                                    {schoolList.map((elem, index) => (
                                        <option value={elem._id} key={index}>{elem.name}</option>
                                    ))}
                                </select>
                            </div>
                            <div className="mt-0 pt-0">
                                <label className="m-1">Password</label>
                                <input type="password" autoComplete="new-password" name="password" value={password} className="w-full" onChange={(e) => { setPassword(e.target.value) }} />
                            </div>

                            <div>
                                {/* display whether registration was successful or not */}
                                {success} {error}

                                <Button type="submit" value="Register" variant="custom"> Register My Account</Button>
                            </div>
                        </form>
                    </div>
                </div></div>




        </div>
    )
}

export default RegisterUser;
