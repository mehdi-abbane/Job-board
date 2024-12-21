import { LogIn } from "@/app/services/supbase/authApi"

export default function LoginFunctionality(data, setIsLoading) {
    setIsLoading(true)
    LogIn(data.email, data.password).then().finally(() => setIsLoading(false))
}
