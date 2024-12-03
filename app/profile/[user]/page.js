// pages/profile.js
import Experience from '@/app/components/Experience';
import Header from '@/app/components/NavBar';
import Posts from '@/app/components/Posts';
import ProfileOverview from '@/app/components/ProfileOverview';

const Profile = () => {
  const profile = {
    picture: '/path/to/profile.jpg', // Static path for profile picture
    name: 'John Doe',
    headline: 'Software Engineer',
    location: 'San Francisco, CA',
  };

  const experiences = [
    { title: 'Software Engineer', company: 'Company XYZ', duration: '2019 - Present' },
    { title: 'Junior Developer', company: 'Company ABC', duration: '2016 - 2019' },
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header />
      <div className="container mx-auto px-6 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Profile Overview */}
          <div className="col-span-1">
            <ProfileOverview profile={profile} />
            <Experience experiences={experiences} />
          </div>
          {/* Activity/Posts Section */}
          <div className="col-span-2">
            <Posts />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;

