import Header from "@/components/reuseable/Header";
import Footer from "@/components/reuseable/Footer";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "MHS Supplies",
  description: "..."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <div className="flex flex-col w-full h-min-screen">
          <Header />
          <main className="flex-grow w-full h-full">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}