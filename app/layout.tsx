import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Janvi Arora — Software Engineer & Agentic AI Developer",
  description:
    "Full-Stack Developer and Agentic AI Engineer. Building intelligent, scalable software with React, FastAPI, and Gemini AI. Open to SWE roles.",
  keywords: [
    "Janvi Arora",
    "Software Engineer",
    "Full Stack Developer",
    "Agentic AI Developer",
    "React",
    "FastAPI",
    "JIIT",
    "Portfolio",
  ],
  authors: [{ name: "Janvi Arora" }],
  openGraph: {
    title: "Janvi Arora — Software Engineer",
    description: "Full-Stack Developer and Agentic AI Engineer",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="bg-[#0A0A0F] text-[#E2E8F0] antialiased overflow-x-hidden">
        {/* Subtle noise texture overlay */}
        <div className="noise-overlay" aria-hidden="true" />
        {children}
      </body>
    </html>
  );
}
