import supabase from "./supabaseClient";

export async function UploadPfp(file) {
    let url = "https://evaxspvpcmechqzqddzu.supabase.co/storage/v1/object/public/avatars" + Math.round(Math.random() * 999999999999999999)
    const { data, error } = await supabase.storage.from("avatars").upload(url, file[0]);

    if (error) {
        console.error("Something went wrong while uploading your profile image you have to upload it again later", error.message);
        return "https://evaxspvpcmechqzqddzu.supabase.co/storage/v1/object/public/avatars/istockphoto-1687018104-612x612-400x400.png";
    }
    return url;

}

export async function UploadBanner(file) {

    let url = "https://evaxspvpcmechqzqddzu.supabase.co/storage/v1/object/public/banners" + Math.round(Math.random() * 999999999999999999)
    const { data, error } = await supabase.storage.from("banners").upload(url, file[0]);
    if (error) {
        return "https://i0.wp.com/linkedinheaders.com/wp-content/uploads/2018/02/sunset-ocean-header.jpg?ssl=1"
    }
    return url;
}
