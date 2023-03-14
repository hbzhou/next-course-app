import React from "react";
import Profile from "./Profile/Profile";
import Image from "next/image";
import logo from "../../public/logo.png";

const Header: React.FC = () => {
  return (
    <div className='navbar bg-base-100 justify-between h-20 border-solid border-2 border-red-300 mx-4'>
      <div className='avatar'>
        <div className='m-4'>
          <Image src={logo} alt='logo' width={64} />
        </div>
      </div>
      <Profile />
    </div>
  );
};

export default Header;
