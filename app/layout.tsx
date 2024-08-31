import type { Metadata } from "next";
import { Inter } from "next/font/google";
import localfont from "next/font/local";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const vsrosd = localfont({
  src: [{ path: "../public/VCR_OSD_MONO_1.001.ttf" }],
  variable: "--font-vsrosd",
});

export const metadata: Metadata = {
  title: "Sarthak Tanpure",
  description: "Portfolio Website",
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
