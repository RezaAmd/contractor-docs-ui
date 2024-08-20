import "@/app/styles/globals.css";
import Navbar from "@/components/Navbar/AdminNavbar";

export const metadata = {
  title: "Contractor Documents",
  description: "Manage general contractor document's.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <body>
        <Navbar />
        <main className="container mx-auto">{children}</main>
      </body>
    </html>
  );
}
