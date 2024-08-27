"use client";
import { useState } from "react";
import { HiX, HiOutlineBell, HiOutlineMenu } from "react-icons/hi";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navigation = [
  { name: "پروژه ها", href: "/admin/projects" },
  { name: "کاربران", href: "/admin/users" },
  { name: "مصالح", href: "/admin/materials" },
  { name: "واحد اندازه گیری", href: "/admin/measures" },
  { name: "تجهیزات", href: "/admin/equipments" },
  { name: "مراحل پروژه", href: "/admin/constructStage" }
];

function joinClasses(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathName = usePathname();

  return (
    <nav className="bg-gray-800 text-gray-300 p-4">
      <div className="flex justify-between items-center">
        <div className="text-lg font-bold me-5">
          <Link href="/" className="hover:text-white">مدیریت اسناد</Link>
        </div>
        <div className="hidden md:flex overflow-auto gap-2">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              aria-current={item.current ? "page" : undefined}
              className={joinClasses(
                item.href == pathName
                  ? "bg-gray-900"
                  : "hover:bg-gray-700",
                "py-2 px-3 text-sm font-medium hover:text-white rounded-md"
              )}
            >
              {item.name}
            </Link>
          ))}
        </div>
        <div className="hidden md:flex items-center gap-2">
          <Link href="/" className="py-2 px-3 hover:text-white hover:bg-gray-700 rounded-md">
            <HiOutlineBell className="h-6 w-6" />
          </Link>
          <Link href="/" className="py-2 px-3 text-sm font-medium hover:text-white hover:bg-gray-700 rounded-md">
            رضا احمدی
          </Link>
        </div>
        <div className="md:hidden flex items-center">
          <button
            className="text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <HiX className="w-6 h-6" /> : <HiOutlineMenu className="w-6 h-6" />}
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden flex flex-col gap-2 mt-2">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              aria-current={item.current ? "page" : undefined}
              className={classNames(
                item.href == pathName
                  ? "bg-gray-900 text-white"
                  : "text-gray-300 hover:bg-gray-700 hover:text-white",
                "rounded-md py-2 px-3 text-sm font-medium"
              )}
            >
              {item.name}
            </Link>
          ))}
          <Link href="/" className="text-white text-sm font-medium">
            رضا احمدی
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;