import "@/app/styles/globals.css";
import Navbar from "@/components/Navbar/AnonymousNavbar";
import Head from "next/head";

export const metadata = {
  title: "بیلدورا",
  description: "پنل مدیریت وظایف و اسناد پیمانکار ساختمان",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
    <Head>
      <title>{`${metadata.title} - ${metadata.description}`}</title>
    </Head>
      <body className="min-h-screen">
        <Navbar />
        <main className="flex flex-col items-center justify-between">
          {children}
        </main>
      </body>
    </html>
  );
}