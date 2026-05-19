import type { Metadata } from "next";
import { DM_Sans, DM_Mono } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const dmMono = DM_Mono({
  variable: "--font-dm-mono",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
});

export const metadata: Metadata = {
  title: "Yashasvi Khatri — Full Stack MERN Developer",
  description:
    "Full Stack MERN Developer and AI & Data Science undergraduate building scalable, production-grade web applications with React, Next.js, Node.js, and MongoDB.",
  keywords: [
    "Yashasvi Khatri",
    "MERN Stack Developer",
    "Full Stack Developer",
    "React Developer",
    "Next.js",
    "Frontend Developer",
    "Portfolio",
  ],
  authors: [{ name: "Yashasvi Khatri" }],
  openGraph: {
    title: "Yashasvi Khatri — Full Stack MERN Developer",
    description:
      "Building scalable AI-powered web applications with React, Next.js, Node.js, and MongoDB.",
    type: "website",
    url: "https://yashasvi-portfolio.vercel.app",
  },
  twitter: {
    card: "summary_large_image",
    title: "Yashasvi Khatri — Full Stack MERN Developer",
    description:
      "Building scalable AI-powered web applications with React, Next.js, Node.js, and MongoDB.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body
        className={`${dmSans.variable} ${dmMono.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
