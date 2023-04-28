import Image from "next/image";
import logo from "../../public/logo.png";
import Profile from "./Profile";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className='navbar mx-4'>
      <div className='navbar-start'>
        <Image src={logo} alt='logo' width={64} priority />
        <ul className='menu menu-horizontal px-1'>
          <li>
            <Link href='/courses'>Courses</Link>
          </li>
          <li>
            <Link href='/authors'>Authors</Link>
          </li>
        </ul>
      </div>
      <div className='navbar-end'>
        <Profile />
      </div>
    </div>
  );
};

export default Navbar;
