export default function ProfileEducation({ education }) {
    return <div className="card bg-base-100 shadow-xl">
        <div className="card-body">
            <h2 className="card-title">Education</h2>
            {education ? education.map((edu, index) => (
                <div key={index}>
                    <h3 className="text-lg font-semibold">{edu.degree}</h3>
                    <p className="text-gray-600">{edu.institution} | {edu.year}</p>
                </div>
            )) : <div>No Education yet</div>}
        </div>
    </div>
}
