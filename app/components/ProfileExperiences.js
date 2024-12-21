import { Briefcase } from "lucide-react";

export default function ProfileExperiences({ experiences }) {
    return <div className="card bg-base-100 shadow-xl mb-6">
        <div className="card-body">
            <h2 className="card-title flex items-center">
                <Briefcase className="mr-2" /> Experience
            </h2>
            {experiences ? experiences.map((job, index) => (
                <div key={index} className="border-b pb-4 last:border-b-0">
                    <h3 className="text-lg font-semibold">{job.role}</h3>
                    <p className="text-gray-600">{job.company} | {job.duration}</p>
                    <p className="mt-2">{job.description}</p>
                </div>
            )) : <div>No experiences added yet.</div>}
        </div>
    </div>
}
