import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const avenirMedium = localFont({
  src: "./fonts/AvenirLTStd-Medium.otf",
  variable: "--font-avenir-medium",
  weight: "500", // Medium weight
});
const avenirHeavy = localFont({
  src: "./fonts/AvenirLTStd-Heavy.otf",
  variable: "--font-avenir-heavy",
  weight: "500", // Medium weight
});

export const metadata: Metadata = {
  title: "Aurtel Consulting Group",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="customtheme" >
      <body
        className={`${avenirMedium.variable} ${avenirHeavy.variable} antialiased`}
      >
        <main> {children}</main>
      </body>
    </html>
  );
}
