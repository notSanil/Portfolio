import type { Metadata, Viewport } from "next";
import { Rubik } from "next/font/google";
import "./globals.css";
import "./globalicons.css";

const rubik = Rubik({ subsets: ["latin"], weight: "700" });

export const metadata: Metadata = {
  metadataBase: new URL('https://www.randomaccessrants.com'),
  title: {
    default: "Random Access Rants | Sanil's Tech blog",
    template: "%s | Random Access Rants"
  },
  description: "Dive into the thoughts of a Software engineer sharing unfiltered thoughts, technical insights, and lessons learnt from code. Welcome to Random Access Rants!",
  keywords: [
    "tech blog",
    "software engineering",
    "computer science",
    "programming",
    "coding",
    "dev",
    "developer",
    "personal blog",
    "Sanil Gupta",
    "rants",
    "insights",
    "code",
    "technology",
    "web development",
    "cloud computing",
    "DevOps",
    "IT",
    "learn to code",
    "debugging",
  ],
  authors: [{ name: "Sanil Gupta", url: "https://www.randomaccessrants.com/" }],
  creator: "Sanil Gupta",
  publisher: "Sanil Gupta",
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: "Random Access Rants | Sanil's Tech blog",
    description: "Dive into the thoughts of a Software engineer sharing unfiltered thoughts, technical insights, and lessons learnt from code. Welcome to Random Access Rants!",
    url: 'https://www.randomaccessrants.com/',
    siteName: 'Random Access Rants',
    images: [
      {
        url: '/images/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Random Access Rants Website Banner',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1.0
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-primary">
      <body className={`${rubik.className} flex flex-col min-h-lvh`}>{children}</body>
    </html >
  );
}
