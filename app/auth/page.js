'use client'
import { useRouter } from "next/navigation";
import { getCurrentSession } from "../services/supbase/authApi";

export default function Auth() {
    const router = useRouter();
    const session = getCurrentSession().then(res => {
        if (res?.session == null) {
            router.push("/auth/signup")
        }
    })
    return null;
}
