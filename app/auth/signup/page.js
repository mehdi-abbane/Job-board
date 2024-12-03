"use client"
import CompanySignUpForm from "@/app/components/CompanySignUpForm";
import EmployerSignupForm from "@/app/components/EmployerSignupForm";
import Link from "next/link";
import { useState } from "react"
import { useForm } from "react-hook-form";
import SignUpFunctionality from "../SignUpFunctionality";

export default function Auth() {

    const [userType, setUserType] = useState(null);
    const { register, handleSubmit, reset } = useForm()
    return <div  className="h-screen w-screen grid place-content-center">

        {
            userType == null &&
            (<div className="flex flex-col gap-3">
                <button className="btn" onClick={() => setUserType("company")}>Company</button>
                <button className="btn btn-primary" onClick={() => setUserType("employer")}>Employer</button>

            </div>
            )
        }
        {userType == "company" && <CompanySignUpForm register={register} />}
        {userType == "employer" && <EmployerSignupForm register={register} />}
        <p className="mt-2 w-full text-center">Or you want to <Link className="font-bold" href="/auth/login">Log In</Link> ?</p>
    </div>
}
