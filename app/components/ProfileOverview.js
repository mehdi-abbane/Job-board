// components/ProfileOverview.js
const ProfileOverview = ({ profile }) => {
  return (
    <div className="flex flex-col items-center bg-base-200 p-4 rounded-lg shadow-md">
      <img className="w-24 h-24 rounded-full border-4 border-gray-300" src={profile.picture} alt="Profile Picture" />
      <h2 className="text-xl font-semibold mt-4">{profile.name}</h2>
      <p className="text-sm text-gray-600">{profile.headline}</p>
      <p className="text-sm text-gray-500">{profile.location}</p>
    </div>
  );
};

export default ProfileOverview;

