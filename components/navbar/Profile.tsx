import React from "react";
import Button from "../common/Button";

const Profile: React.FC = () => {
  return (
    <div className='flex gap-6 items-center'>
      <div className='font-bold font-mono text-2xl'>Jeremy</div>
      <div>
        <Button color='linkedin'>Logout</Button>
      </div>
    </div>
  );
};

export default Profile;
