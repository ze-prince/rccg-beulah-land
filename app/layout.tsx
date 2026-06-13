// app/layout.tsx
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "RCCG Beulah Land",
  description: "Bride Of Christ | Redeemed Christian Church of God - Beulah Land",
  keywords: ["RCCG", "Beulah Land", "Redeemed Christian Church of God", "Church", "Worship"],
  icons: {
    icon: "/logo.png",           // ← This sets the favicon
    shortcut: "/logo.png",
    apple: "/logo.png",          // For iOS devices
  },
  openGraph: {
    title: "RCCG Beulah Land",
    description: "A People Married To Christ",
    images: [{ url: "/logo.png" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
      <body className="min-h-screen flex flex-col bg-white">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}