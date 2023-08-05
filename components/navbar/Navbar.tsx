import Image from "next/image";
import logo from "../../public/logo.png";
import NavLink from "./NavLink";
import Profile from "./Profile";
import { useSession } from "next-auth/react";

const Navbar = () => {
  const { data: session } = useSession();
  return (
    <div className='navbar px-4 border-slate-100 border-b h-30 flex items-center justify-between w-full'>
      <div className='flex gap-5 items-center justify-end text-primary text-base'>
        <Image src={logo} alt='logo' width={64} priority />
        {session && session.user && (
          <>
            <NavLink href='/courses' iconName='building'>
              Courses
            </NavLink>
            <NavLink href='/authors' iconName='user md'>
              Authors
            </NavLink>
            <NavLink href='/users' iconName='user'>
              Users
            </NavLink>
          </>
        )}
      </div>
      <Profile />
    </div>
  );
};

export default Navbar;
