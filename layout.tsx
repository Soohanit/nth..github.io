import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "../globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: " Valentine's Day Card 💖",
  description: "Will you be my valentine?",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
