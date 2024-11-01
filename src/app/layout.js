import localFont from "next/font/local";
import "./globals.css";
import OffcanvasNav from "../components/OffcanvasNav";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Mhssp Procurement",
  description: "Module for MHSSP Procurement",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <OffcanvasNav />
        <main className="p-4">{children}</main>
      </body>
    </html>
  );
}
