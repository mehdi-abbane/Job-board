"use client"
import { useState } from "react"
import { useForm } from "react-hook-form";
import Input from "../components/Input";

export default function Auth() {

    const [userType, setUserType] = useState(null);
    const { register, handleSubmit, reset } = useForm()
    return <div className="h-screen w-screen grid place-content-center">

        {
            userType == null &&
            (<div className="flex flex-col gap-3">
                <button className="btn" onClick={() => setUserType("company")}>Company</button>
                <button className="btn btn-primary" onClick={() => setUserType("employer")}>Employer</button>

            </div>
            )
        }
        {
            userType == "company" && <div className="flex flex-col gap-4">
                <Input register={register} info="name" placeholder="Microfost" label="Name" />
                <Input register={register} info="pfp" isTextarea={null} label="Profile Picture" />
                <Input register={register} info="banner" isTextarea={null} label="Banner" />
                <Input register={register} info="email" type="email" placeholder="Email" label="Company's Email" />
                <Input register={register} info="description" isTextarea={true} placeholder="Passionate Frontend
                Developer who bring much value to your technical team" label="Description" />
                <button className="btn btn-primary">Sign Up</button>
            </div>
        }
        {
            userType == "employer" && <div className="grid grid-cols-2 gap-2 grid-rows-2 ">
                <Input register={register} info="pfp" isTextarea={null} label="Profile Picture" />
                <Input register={register} info="banner" isTextarea={null} label="Banner" />
                <Input register={register} info="email" type="email" placeholder="Email" label="Email" />
                <Input register={register} info="name" placeholder="Mehdi Abbane" label="Name" />
                <Input register={register} info="fullname" placeholder="Mehdi Abbane" label="Full Name" />
                <Input register={register} info="role" placeholder="Frontend" label="Role" />
                <Input register={register} info="skills" placeholder="Next.js, react, Javascript" label="Full Name" />
                <Input register={register} info="description" isTextarea={true} placeholder="Passionate Frontend Developer who bring
                much value to your technical team" label="Description" />
                <div className="w-full col-span-2">
                    <button className="btn btn-primary w-full">Sign Up</button>
                </div>
            </div>
        }
    </div>
}
