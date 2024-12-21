import supabase from "./supabaseClient";

export async function UploadPfp(file) {
    const imageName = `${Math.random()}-${file[0].name}`.replaceAll("/", "")
    const imagePath = `${process.env.SUPABASE_URL}/storage/v1/object/public/avatars/${imageName}`
    const { error } = await supabase.storage.from("avatars").upload(imageName, file[0])
    if (error) {
        return "https://evaxspvpcmechqzqddzu.supabase.co/storage/v1/object/public/avatars/istockphoto-1687018104-612x612-400x400.png"
    }

    return imagePath
}

export async function UploadBanner(file) {
    const imageName = `${Math.random()}-${file[0].name}`.replaceAll("/", "")
    const imagePath = `${process.env.SUPABASE_URL}/storage/v1/object/public/banners/${imageName}`
    const { error } = await supabase.storage.from("banners").upload(imageName, file[0])
    if (error) {
        return "https://evaxspvpcmechqzqddzu.supabase.co/storage/v1/object/public/banners/Resized_Image.png"
    }
    return imagePath;
}

