import Image from "next/image";
import logo from "../../public/logo.png";
import Profile from "./Profile";

const Navbar = () => {
  return (
    <div className='navbar mx-4'>
      <div className='navbar-start'>
        <Image src={logo} alt='logo' width={64} />
      </div>
      <div className='navbar-end'>
        <Profile />
      </div>
    </div>
  );
};

export default Navbar;
