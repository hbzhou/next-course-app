import React from "react";

const Profile: React.FC = () => {
  return (
    <div className='flex m-4 gap-3'>
      <div className='font-bold font-mono text-xl'>Jeremy</div>
      <button className='px-3 border-2 border-solid border-purple-700 rounded-md'>Logout</button>
    </div>
  );
};

export default Profile;
