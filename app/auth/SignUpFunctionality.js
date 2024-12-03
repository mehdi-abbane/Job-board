import { SignUp } from "../services/supbase/authApi";
import { UploadBanner, UploadPfp } from "../services/supbase/storageApi";
import supabase from "../services/supbase/supabaseClient";

export default async function SignUpFunctionality(data) {
    let userData = {
        name: data?.name,
        email: data?.email,
        description: data?.description
    }


    let pfpUrl = await UploadPfp(data.pfp);
    let bannerUrl = await UploadBanner(data.banner);
    SignUp(data.email, data.password).then(
        userData => {
            supabase.auth.updateUser({
                data: {
                    pfpUrl,
                    bannerUrl
                }
            })
        }
    ).catch()
}
