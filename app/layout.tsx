import type { Metadata } from "next";
import { Inter, Geist } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import localFont from 'next/font/local';

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

const myCustomFont = localFont({
  src: [
    {
      path: '../public/fonts/PixelifySans-Medium.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/fonts/PixelifySans-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-pixel',
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Dymas Alfin — UI/UX Designer",
  description:
    "Designing digital products that are clear, usable, and conversion focused.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={cn("font-sans", geist.variable, myCustomFont.variable)}>
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
