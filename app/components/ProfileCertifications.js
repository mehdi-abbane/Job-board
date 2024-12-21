import { Award } from "lucide-react";

export default function ProfileCertifications({ certifications }) {
    return <div className="card bg-base-100 shadow-xl">
        <div className="card-body">
            <h2 className="card-title flex items-center">
                <Award className="mr-2" /> Certifications
            </h2>
            {certifications ? certifications.map((cert, index) => (
                <div key={index}>
                    <h3 className="text-lg font-semibold">{cert.name}</h3>
                    <p className="text-gray-600">{cert.issuer} | {cert.year}</p>
                </div>
            )) : <div>No Certifications yet</div>}
        </div>
    </div>
}
