import Image from "next/image";
import logo from "../../public/logo.png";
import Profile from "./Profile";
import Link from "next/link";
import { Icon } from "semantic-ui-react";
import cn from "classnames";
import NavLink from "./NavLink";

const Navbar = () => {
  return (
    <div className='navbar px-4 border-slate-100 border-b h-20 flex items-center justify-between w-full'>
      <div className='flex gap-5 items-center justify-end text-primary text-base'>
        <Image src={logo} alt='logo' width={64} priority />
        <NavLink href='/courses' iconName='building'>
          Courses
        </NavLink>
        <NavLink href='/authors' iconName='user md'>
          Authors
        </NavLink>
      </div>
      <Profile />
    </div>
  );
};

export default Navbar;
