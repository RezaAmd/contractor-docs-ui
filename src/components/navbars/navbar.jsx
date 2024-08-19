import { HiX, HiOutlineBell, HiOutlineMenu } from "react-icons/hi";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="flex justify-between bg-gray-800 p-4">
      <div className="flex container me-auto items-center">
        <div className="text-white text-lg font-bold me-5">
          <Link href="/">مدیریت اسناد</Link>
        </div>
        <div className="space-x-4 gap-2">
          <Link href="/" className="text-white">
            خانه
          </Link>
        </div>
      </div>
      <div className="flex container justify-end items-center">
        <div className="gap-2">
          <Link href="/" className="text-white">
            ورود
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
