import { useForm } from "react-hook-form";
import Input from "./Input";
import SignUpFunctionality from "../auth/SignUpFunctionality";

export default function CompanySignUpForm() {
const {handleSubmit, reset, register} = useForm()
    return (
        <form onSubmit={handleSubmit(SignUpFunctionality)} className="grid grid-cols-2 grid-rows-2 gap-4">

            <Input register={register} info="name" placeholder="Microfost" label="Name" />
            <Input register={register} info="password" placeholder="********" label="Password" />
            <Input register={register} info="pfp" isTextarea={null} label="Profile Picture" />
            <Input register={register} info="banner" isTextarea={null} label="Banner" />
            <Input register={register} info="field" isTextarea={false} label="Field" placeholder="eg, Tech" />
            <Input register={register} info="email" type="email" placeholder="example@domain.com" label="Company's Email" />
            <Input register={register} info="description" isTextarea={true} placeholder="Passionate Frontend
                Developer who bring much value to your technical team" label="Description" />
            <button type="submit" className="btn btn-primary row-span-1 col-span-2">Sign Up</button>
        </form>

    )
}
