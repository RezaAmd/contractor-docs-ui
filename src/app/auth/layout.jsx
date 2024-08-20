import "@/app/styles/globals.css";

export const metadata = {
  title: "احراز هویت",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <body>
        <main className="container mx-auto">{children}</main>
      </body>
    </html>
  );
}
