import { useForm } from "react-hook-form";
import Input from "./Input";
import SignUpFunctionality from "../auth/SignUpFunctionality";

export default function EmployerSignupForm() {
const {register, handleSubmit } = useForm()
    return (
        <form onSubmit={handleSubmit(SignUpFunctionality)} className="grid grid-cols-2 gap-2 grid-rows-2 ">
            <Input register={register} info="pfp" isTextarea={null} label="Profile Picture" />
            <Input register={register} info="banner" isTextarea={null} label="Banner" />
            <Input register={register} info="email" type="email" placeholder="Email" label="Email" />
            <Input register={register} info="name" placeholder="Mehdi Abbane" label="Name" />
            <Input register={register} info="fullname" placeholder="Mehdi Abbane" label="Full Name" />
            <Input register={register} info="role" placeholder="Frontend" label="Role" />
            <Input register={register} info="skills" placeholder="Next.js, react, Javascript" label="Full Name" />
            <Input register={register} info="description" isTextarea={true} placeholder="Passionate 
                Frontend Developer who bring
                much value to your technical team" label="Description" />
            <button type="submit" className="btn btn-primary w-full col-span-2 row-span-1">Sign Up</button>
        </form>

    )
}
