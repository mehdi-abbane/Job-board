'use client'
import ProfileHeader from '@/app/components/ProfileHeader';
import ProfileAbout from '@/app/components/ProfileAbout';
import ProfileSkills from '@/app/components/ProfileSkills';
import ProfileExperiences from '@/app/components/ProfileExperiences';
import ProfileEducation from '@/app/components/ProfileEducation';
import ProfileCertifications from '@/app/components/ProfileCertifications';
import GetCurrentAuthUser from './GetCurrentAuthUser';
import { useState } from 'react';


const ProfilePage = () => {
    // Sample user data - you'd replace this with actual user data from your backend
    const [userData, setUserData] = useState(null);
    GetCurrentAuthUser(setUserData)
    if (userData == null) return <div>Loading....</div>
    return (
        <div className="container mx-auto px-4 py-8 max-w-4xl">
            {/* Profile Header */}
            <ProfileHeader website={userData.website} headline={userData.headline} location={userData.location} email={userData.location} />
            {/* About Section */}
            <ProfileAbout about={userData.about} />
            {/* Skills Section */}
            <ProfileSkills skills={userData.skills} />
            {/* Experience Section */}
            <ProfileExperiences experience={userData.experience} />
            {/* Education & Certifications */}
            <div className="grid md:grid-cols-2 gap-6">
                {/* Education Card */}
                <ProfileEducation education={userData.education} />
                {/* Certifications Card */}
                <ProfileCertifications certifications={userData.certifications} />
            </div>
        </div>
    );
};

export default ProfilePage;
