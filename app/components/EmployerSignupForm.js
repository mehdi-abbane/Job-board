'use client'
import { useForm } from "react-hook-form";
import Input from "./Input";
import SignUpFunctionality from "../auth/SignUpFunctionality";
import { useState } from "react";

export default function EmployerSignupForm() {
    const { register, handleSubmit } = useForm()
    const [isLoading, setIsLoading] = useState();
    return (
        <form onSubmit={handleSubmit((data) => SignUpFunctionality(data, setIsLoading))} className="carousel">
            <div id="slide1" className="carousel-item grid grid-cols-2 gap-2 grid-rows-3 ">

                <Input register={register} info="pfp" isTextarea={null} label="Profile Picture" regOps={{ required: true }} />

                <Input register={register} info="banner" isTextarea={null} label="Banner" regOps={{ required: true }} />
                <Input register={register} info="email" type="email" placeholder="Email" label="Email" regOps={{ required: true }} />

                <Input register={register} info="password" type="password" label="Password" regOps={{ required: true }} />
                <Input register={register} info="fullname" placeholder="Mehdi Abbane" label="Full Name" regOps={{ required: true }} />
                <Input register={register} info="headline" placeholder="Frontend" label="Role" regOps={{ required: true }} />

                <Input register={register} info="location" placeholder="San Francisco, CA" label="Location" regOps={{ required: true }} />

                <Input register={register} info="skills" label="Skills" regOps={{ required: true }} />
                <div className="col-span-2 row-span-1">
                    <Input register={register} info="description" isTextarea={true} placeholder="Passionate 
                Frontend Developer who bring
                much value to your technical team" label="Description" />

                </div>
                <button disabled={isLoading} type="submit" className="btn btn-primary row-span-1 col-span-2">
                    <span>Sign Up</span>
                    {isLoading && <span className="loading loading-bars loading-md"></span>}
                </button>
            </div>
        </form>

    )
}
