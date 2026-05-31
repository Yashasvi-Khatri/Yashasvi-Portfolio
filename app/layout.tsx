import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "Yashasvi Khatri — Full Stack Engineer",
  description: "Full Stack Engineer focused on AI-powered products, modern web applications, and scalable user experiences.",
  keywords: [
    "Yashasvi Khatri",
    "Full Stack Engineer",
    "MERN Stack",
    "AI Engineer",
    "React Developer",
    "Next.js",
    "DRDO Intern",
    "Researcher",
    "Portfolio",
  ],
  authors: [{ name: "Yashasvi Khatri" }],
  openGraph: {
    title: "Yashasvi Khatri — Full Stack Engineer",
    description: "DRDO intern, published researcher, MERN Stack engineer.",
    type: "website",
    url: "https://yashasvi.dev",
    siteName: "Yashasvi Khatri",
    locale: "en_US",
    images: [
      {
        url: "https://yashasvi.dev/og-image.png",
        width: 1200,
        height: 630,
        alt: "Yashasvi Khatri - Full Stack Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Yashasvi Khatri — Full Stack Engineer",
    description: "DRDO intern, published researcher, MERN Stack engineer.",
    images: ["https://yashasvi.dev/og-image.png"],
    creator: "@yashasvi_khatri",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Yashasvi Khatri",
    jobTitle: "Full Stack Developer & AI Product Builder",
    email: "yashasvikhatrii@gmail.com",
    url: "https://yashasvi-portfolio.vercel.app",
    sameAs: [
      "https://github.com/Yashasvi-Khatri",
      "https://www.linkedin.com/in/yashasvi-khatri-378231217/",
    ],
    knowsAbout: [
      "React.js",
      "Next.js",
      "TypeScript",
      "Node.js",
      "MongoDB",
      "AI/ML",
      "Full Stack Development",
      "Frontend Engineering",
    ],
    alumniOf: "GGSIPU",
  };

  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased`}
      >
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-indigo-600 focus:text-white focus:rounded-lg"
        >
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  );
}
