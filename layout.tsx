import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

/* Primary font */
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

/* Monospace font (for code later if needed) */
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

/* Global site metadata */
export const metadata: Metadata = {
  title: "Your Name — Portfolio",
  description: "Design & development portfolio",
};

/* Root layout: wraps every page */
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-zinc-50 text-zinc-900`}
      >
        {children}
      </body>
    </html>
  );
}
