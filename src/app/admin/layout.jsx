import "@/app/styles/globals.css";
import React from "react";
import Navbar from "@/components/Navbar/AdminNavbar";
import { NextUIProvider } from "@nextui-org/react";

export const metadata = {
  title: "Contractor Documents",
  description: "Manage general contractor document's.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
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
