import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Open_Sans } from "next/font/google";
import { Poppins } from "next/font/google";
import "./globals.css";


const openSans = Open_Sans({
  subsets:['latin'],
  display:'swap',
  variable:"--font-opensans"
})
const poppins = Poppins({
  weight:['700', '800', '900'],
  subsets:['latin'],
  display:'swap',
  variable:'--font-poppins'
})

export const metadata: Metadata = {
  title: "Memovie",
  description: "A website that lets you remember your favorite movies",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${openSans.variable} ${poppins.variable}`}>{children}</body>
    </html>
  );
}
