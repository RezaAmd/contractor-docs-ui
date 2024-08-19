"use client";
import { HiX, HiOutlineBell, HiOutlineMenu } from "react-icons/hi";
import Link from "next/link";

const navigation = [
  { name: "پروژه ها", href: "/admin/projects", current: true },
  { name: "کاربران", href: "/admin/users", current: false },
  { name: "مصالح", href: "/admin/materials", current: false },
  { name: "واحد اندازه گیری", href: "/admin/measures", current: false },
  { name: "تجهیزات", href: "/admin/equipments", current: false },
  { name: "مراحل پروژه", href: "/admin/constructStage", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Navbar = () => {
  return (
    <nav className="flex justify-between bg-gray-800 p-4">
      <div className="flex container me-auto items-center">
        <div className="text-white text-lg font-bold me-5">
          <Link href="/">مدیریت اسناد</Link>
        </div>
        <div className="flex space-x-4 gap-2">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              aria-current={item.current ? "page" : undefined}
              className={classNames(
                item.current
                  ? "bg-gray-900 text-white"
                  : "text-gray-300 hover:bg-gray-700 hover:text-white",
                "rounded-md px-3 py-2 text-sm font-medium"
              )}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
      <div className="flex container justify-end items-center">
        <div className="gap-2">
          <Link href="/" className="text-white">
            رضا احمدی
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
