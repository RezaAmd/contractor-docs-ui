import "@/app/styles/globals.css";
import React from "react";
import Navbar from "@/components/Navbar/AdminNavbar";
import { NextUIProvider } from "@nextui-org/react";
import Head from "next/head";

export const metadata = {
  title: "بیلدورا",
  description: "پنل مدیریت وظایف و اسناد پیمانکار ساختمان.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <Head>
        <title>{`${metadata.title} - ${metadata.description}`}</title>
      </Head>
      <body>
        <React.StrictMode>
          <NextUIProvider>
            <Navbar />
            <main className="mx-auto py-4 px-2">{children}</main>
          </NextUIProvider>
        </React.StrictMode>
      </body>
    </html>
  );
}