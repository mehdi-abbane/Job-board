export default function Input({ register, info, placeholder = "", isTextarea = false, type = "text", label = "", regOps = {} }) {
    return <div>
        <div className="label">
            <span className="label-text">{label}</span>
        </div>
        {
            isTextarea == null &&
            <input type="file" {...register(info, { ...regOps })} className="file-input file-input-bordered w-full max-w-xs" />
        }
        {
            isTextarea == false &&
            <input {...register(info, { ...regOps })} className="input input-bordered w-full max-w-xs" type={type} placeholder={placeholder} />
        }
        {
            isTextarea == true &&
            <textarea {...register(info, { ...regOps })} className="textarea textarea-bordered" placeholder="Bio"></textarea>

        }
    </div>
}
