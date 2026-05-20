import type { Metadata } from "next";
import { Geist, Geist_Mono, Manrope } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AAVORide — India's Smarter Outstation Cab Platform",
  description: "Experience executive-grade travel with AAVORide. Punctual arrivals, verified luxury fleet, and transparent pricing for your intercity journeys.",
  icons: {
    icon: "/cartop.svg",
    apple: "/cartop.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${manrope.variable} h-full antialiased`}
    >
      <body className={`min-h-full flex flex-col ${manrope.className}`}>
        <div className="relative w-full flex-1 overflow-x-hidden">
          {children}
        </div>
      </body>
    </html>
  );
}
