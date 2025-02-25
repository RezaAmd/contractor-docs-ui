import "@/app/styles/globals.css";
import React from "react";
import Navbar from "@/components/Navbar/AdminNavbar";
import { NextUIProvider } from "@nextui-org/react";
import { AuthGuard } from "@/components/Auth/AuthGuard";

export default function RootLayout({ children }) {
  return (
    <AuthGuard>
      <React.StrictMode>
        <NextUIProvider>
          <Navbar />
          <main className="mx-auto py-4 px-2">{children}</main>
        </NextUIProvider>
      </React.StrictMode>
    </AuthGuard>
  );
}