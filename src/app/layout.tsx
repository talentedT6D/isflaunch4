import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Indian Scroll Festival",
  icons: {
    icon: "/logo/653646975_17857716507672739_5910581069835096010_n.jpg",
  },
  description:
    "India's first festival built for the scroll generation. Submit your short-form films across Comedy, AI, Edits, Emotional, and Food categories.",
  keywords: [
    "ISF",
    "Indian Scroll Festival",
    "film festival",
    "short form",
    "Bengaluru",
    "2026",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="google-site-verification" content="XlFIEt2JgRjpA66XPX1sSHq_Km3xYBqzBoWG7TG67pE" />
        <link rel="stylesheet" href="https://use.typekit.net/xfk5kyc.css" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
