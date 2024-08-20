import { HiX, HiOutlineBell, HiOutlineMenu } from "react-icons/hi";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-teal-900 p-4">
      <div className="flex justify-between container mx-auto">
        <div className="flex me-auto items-center">
          <div className="text-white text-lg font-bold me-5">
            <Link href="/">مدیریت اسناد</Link>
          </div>
          <div className="space-x-4 gap-2">
            <Link href="/" className="text-white">
              خانه
            </Link>
          </div>
        </div>
        <div className="flex justify-end items-center">
          <div className="gap-2">
            <Link href="/auth/signin" className="text-white">
              ورود
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
