"use client"
import { useForm } from "react-hook-form";
import Input from "./Input";
import SignUpFunctionality from "../auth/SignUpFunctionality";
import { useState } from "react";

export default function CompanySignUpForm() {
    const { handleSubmit, reset, register } = useForm()
    const [isLoading, setIsLoading] = useState(false);
    return (
        <form onSubmit={handleSubmit((data) => SignUpFunctionality(data, setIsLoading))} className="grid grid-cols-2 grid-rows-2 gap-4">

            <Input register={register} info="name" placeholder="Microfost" label="Name" />
            <Input register={register} info="password" type="password" placeholder="********" label="Password" />
            <Input register={register} info="pfp" isTextarea={null} label="Profile Picture" />
            <Input register={register} info="banner" isTextarea={null} label="Banner" />
            <Input register={register} info="field" isTextarea={false} label="Field" placeholder="eg, Tech" />
            <Input register={register} info="email" type="email" placeholder="example@domain.com" label="Company's Email" />
            <Input register={register} info="description" isTextarea={true} placeholder="Passionate Frontend
                Developer who bring much value to your technical team" label="Description" />

            <button disabled={isLoading} type="submit" className="btn btn-primary row-span-1 col-span-2">
                <span>Sign Up</span>
                {isLoading && <span className="loading loading-bars loading-md"></span>}
            </button>
        </form>

    )
}
