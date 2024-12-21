import { Link2, Mail, MapPin } from "lucide-react";

export default function ProfileHeader({ name, headline, location, email, website, pfpUrl }) {
    return <div className="card bg-base-100 shadow-xl mb-6">
        <div className="card-body">
            <div className="flex items-center space-x-6">
                <div className="avatar">
                    <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                        <img src={pfpUrl} alt={`${name}'s profile`} />
                    </div>
                </div>
                <div>
                    <h1 className="text-3xl font-bold">{name}</h1>
                    <p className="text-xl text-gray-600">{headline}</p>
                    <div className="flex items-center space-x-4 mt-2 text-gray-500">
                        <div className="flex items-center space-x-1">
                            <MapPin size={16} />
                            <span>{location}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                            <Mail size={16} />
                            <span>{email}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                            <Link2 size={16} />
                            {website ?
                                <a href={website} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                                    Personal Website
                                </a>
                                : <div>No Website</div>
                            }
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </div>
}
