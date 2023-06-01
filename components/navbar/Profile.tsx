import React from "react";
import Button from "../common/Button";
import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/router";

const Profile: React.FC = () => {
  const router = useRouter();
  const { data: session } = useSession();
  const login = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    router.push("/login");
  };
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
        <Button color='linkedin' onClick={login}>
          Login
        </Button>
      )}
    </div>
  );
};

export default Profile;
