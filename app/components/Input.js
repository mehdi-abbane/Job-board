export default function Input({ register, info, placeholder = "", isTextarea = false, type = "text", label = "" }) {
    return <div>
        <div className="label">
            <span className="label-text">{label}</span>
        </div>
        {
            isTextarea == null &&
            <input type="file" {...register(info)} className="file-input file-input-bordered w-full max-w-xs" />
        }
        {
            isTextarea == false &&
            <input {...register(info)} className="input input-bordered w-full max-w-xs" type={type} placeholder={placeholder} />
        }
        {
            isTextarea == true &&
            <textarea {...register(info)} className="textarea textarea-bordered" placeholder="Bio"></textarea>
        }
    </div>
}
