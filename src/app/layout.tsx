import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Jatin Panesiya | Web Developer",
  description:
    "Jatin Panesiya is a skilled web developer with expertise in React, Next.js, and frontend development. Focused on creating fast, user-friendly, and visually appealing web applications.",
  keywords: [
    "Jatin Panesiya",
    "Web Developer",
    "React Developer",
    "Next.js Developer",
    "Frontend Developer",
  ],
  authors: [{ name: "Jatin Panesiya", url: "https://yourdomain.com" }], //TODO change the url
  creator: "Jatin Panesiya",
  applicationName: "Jatin Panesiya Portfolio",
  openGraph: {
    title: "Jatin Panesiya | Web Developer",
    description:
      "Skilled web developer specializing in React, Next.js, and modern frontend development.",
    url: "https://yourdomain.com", //TODO change the url
    siteName: "Jatin Panesiya Portfolio",
    images: [
      {
        url: "https://yourdomain.com/og-image.jpg", //TODO change the url
        width: 1200,
        height: 630,
        alt: "Jatin Panesiya Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
