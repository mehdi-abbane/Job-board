import Error from "next/error";
import { SignUp } from "../services/supbase/authApi";
import { UploadBanner, UploadPfp } from "../services/supbase/storageApi";
import supabase from "../services/supbase/supabaseClient";
function ProcessData(data) {
    let userData = {
        email: data?.email,
        description: data?.description
    }
    if (data.role) {
        userData.displayName = data.fullname
        userData.role = data.role;
        userData.skills = data.skills.split(", ");
    } else {
        userData.field = data.field;
        userData.displayName = data.name
    }
    return userData;
}
export default async function SignUpFunctionality(data, setIsloading) {
    setIsloading(true);
    const userData = ProcessData(data);
    SignUp(data.email, data.password).then(userRes => {
        UploadPfp(data.pfp).then(pfpRes => {
            UploadBanner(data.banner).then(bannerRes => {
                supabase.auth.updateUser({
                    data: {
                        ...userData,
                        pfpUrl: pfpRes,
                        bannerUrl: bannerRes
                    }
                }).then(res => setIsloading(false))
            })
        })
    })
}
