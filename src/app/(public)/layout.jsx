import "@/app/styles/globals.css";
import Navbar from "@/components/Navbar/AnonymousNavbar";

export const metadata = {
  title: "بیلدورا",
  description: "پنل مدیریت وظایف و اسناد پیمانکار ساختمان",
};

export default function RootLayout({ children }) {
  return (
    <>
      <Navbar />
      <main className="flex flex-col items-center justify-between">
        {children}
      </main>
    </>
  );
}