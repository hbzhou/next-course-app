import React from "react";

const Profile: React.FC = () => {
  return (
    <div className='flex m-4 gap-3'>
      <div className='font-bold font-mono text-xl'>Jeremy</div>
      <button className='btn btn-secondary'>Logout</button>
    </div>
  );
};

export default Profile;
