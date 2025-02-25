'use client'
import { HiX, HiOutlineBell, HiOutlineMenu } from "react-icons/hi";
import Link from "next/link";
import { useAuth } from "@/context/AuthContext";

const Navbar = () => {
  const { currentUser } = useAuth();

  return (
    <nav className="bg-indigo-900 p-4">
      <div className="flex justify-between container mx-auto">
        <div className="flex me-auto items-center">
          <div className="text-white text-lg font-bold me-6">
            <Link href="/">مدیریت اسناد</Link>
          </div>
          <div className="flex gap-3">
            <Link href="/" className="text-white">
              خانه
            </Link>
          </div>
        </div>
        <div className="flex justify-end items-center">
          <div className="gap-2">
            {
              currentUser && <div>{currentUser.username}</div>
            }
            {
              !currentUser &&
              <Link href="/auth/signin" className="text-white">
                ورود
              </Link>
            }
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
