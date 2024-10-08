import type { Metadata } from "next";
import localfont from "next/font/local";
import "./globals.css";

const vsrosd = localfont({
  src: [{ path: "../public/ModernDOS9x16.ttf" }],
  variable: "--font-vsrosd",
});

export const metadata: Metadata = {
  title: "Sarthak Tanpure",
  description: "Portfolio Website",
  icons: {
    icon: ["../app/favicon.ico"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={vsrosd.className}>{children}</body>
    </html>
  );
}
