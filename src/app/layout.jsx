const { AuthContextProvider, AuthProvider } = require("@/context/AuthContext")
import Head from "next/head";
import React from "react";
import { NextUIProvider } from "@nextui-org/react";
import Navbar from "@/components/Navbar/AdminNavbar";

export const metadata = {
    title: "بیلدورا",
    description: "پنل مدیریت وظایف و اسناد پیمانکار ساختمان.",
};

const Layout = ({ children }) => {
    return (
        <html lang="fa" dir="rtl">
            <Head>
                <title>{`${metadata.title} - ${metadata.description}`}</title>
            </Head>
            <body>
                <AuthProvider>
                    {children}
                    </AuthProvider>
            </body>
        </html>
    )
}

export default Layout