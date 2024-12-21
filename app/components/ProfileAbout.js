import { User } from 'lucide-react'
export default function ProfileAbout({ about }) {
    return <div className="card bg-base-100 shadow-xl mb-6">
        <div className="card-body">
            <h2 className="card-title flex items-center">
                <User className="mr-2" /> About
            </h2>

            <p>{about}</p>
        </div>
    </div>
}
