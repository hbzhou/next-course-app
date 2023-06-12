import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import React from "react";
import Button from "../common/Button";

const Profile: React.FC = () => {
  const router = useRouter();
  const { data: session } = useSession();
  const login = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    router.push("/login");
  };
  const logout = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    signOut({
      callbackUrl: "/login",
      redirect: true,
    });
  };
  if (router.asPath === "/login") {
    return <></>;
  }
  return (
    <div>
      {session && session.user ? (
        <div className='flex gap-6 items-center'>
          <div className='font-bold font-mono text-2xl'>{session.user.name}</div>
          <Button color='linkedin' onClick={logout}>
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
