import React from "react";
import Button from "../common/Button";
import { signIn, signOut, useSession } from "next-auth/react";

const Profile: React.FC = () => {
  const { data: session } = useSession();
  return (
    <div>
      {session && session.user ? (
        <div className='flex gap-6 items-center'>
          <div className='font-bold font-mono text-2xl'>{session.user.name}</div>
          <Button color='linkedin' onClick={() => signOut()}>
            Logout
          </Button>
        </div>
      ) : (
        <Button color='linkedin' onClick={() => signIn()}>
          Login
        </Button>
      )}
    </div>
  );
};

export default Profile;
