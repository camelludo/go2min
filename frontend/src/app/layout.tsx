import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navigation } from "@/components/layout/navigation";
import { Footer } from "@/components/layout/footer";
import { Toaster } from "@/components/ui/toaster";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Go2Mineral - Premium Turkish Minerals Export",
  description: "Leading Turkish mineral exporter specializing in boron, feldspar, pumice, bentonite & magnesite. ISO-certified quality, competitive pricing, worldwide shipping.",
  keywords: "Turkish minerals, boron suppliers Turkey, feldspar exporters, Turkish bentonite, pumice Turkey, magnesite suppliers",
  openGraph: {
    title: "Go2Mineral - Premium Turkish Minerals Export",
    description: "ISO-certified Turkish minerals for global industries. Direct from source.",
    type: "website",
    locale: "en_US",
    url: "https://go2mineral.com",
    siteName: "Go2Mineral",
  },
  twitter: {
    card: "summary_large_image",
    title: "Go2Mineral - Premium Turkish Minerals Export",
    description: "ISO-certified Turkish minerals for global industries.",
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning
      >
        <div className="flex min-h-screen flex-col">
          <Navigation />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
        <Toaster />
      </body>
    </html>
  );
}
