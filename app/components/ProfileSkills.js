export default function ProfileSkills({ skills }) {
    return <div className="card bg-base-100 shadow-xl mb-6">
        <div className="card-body">
            <h2 className="card-title">Skills</h2>
            <div className="flex flex-wrap gap-2">
                {skills ? skills.map((skill, index) => (
                    <span key={index} className="badge badge-primary badge-outline">
                        {skill}
                    </span>
                )) : <div>No skills added yet.</div>}
            </div>
        </div>
    </div>
}
