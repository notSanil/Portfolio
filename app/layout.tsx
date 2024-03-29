import type { Metadata } from "next";
import { Rubik } from "next/font/google";
import "./globals.css";
import "./globalicons.css";

const rubik = Rubik({ subsets: ["latin"], weight: "700" });

export const metadata: Metadata = {
  title: "Sanil Gupta",
  description: "Get to know more about Sanil.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={rubik.className}>{children}</body>
    </html>
  );
}
