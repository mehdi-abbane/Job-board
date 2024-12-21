'use client'
import Input from "@/app/components/Input";
import { useState } from "react";
import { useForm } from "react-hook-form";
import LoginFunctionality from "./LoginFunctionality";

export default function Login() {
    const { register, handleSubmit } = useForm();
    const [isLoading, setIsLoading] = useState()
    return <form onSubmit={handleSubmit((data) => LoginFunctionality(data, setIsLoading))}>
        <Input register={register} info="email" type="email" regOps={{ required: true }} label="Email" />
        <Input register={register} info="password" type="password" regOps={{ required: true }} label="Password" />


        <button disabled={isLoading} type="submit" className="btn btn-primary row-span-1 col-span-2">
            <span>Log In</span>
            {isLoading && <span className="loading loading-bars loading-md"></span>}
        </button>
    </form>
}
