import React from "react";
import Profile from "./Profile/Profile";
import Image from "next/image";
import logo from "../../public/logo.png";

const Header: React.FC = () => {
  return (
    <header className='flex justify-between items-center h-20 border-solid border-2 border-red-300 mx-4'>
      <div className='m-4'>
        <Image src={logo} alt='logo' width={64} />
      </div>
      <Profile />
    </header>
  );
};

export default Header;
