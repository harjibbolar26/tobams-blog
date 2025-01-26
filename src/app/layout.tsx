import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "@/components/common/footer";
import Navbar from "@/components/common/navbar";
import Newsletter from "@/components/common/newsletter";
import QueryClientProviderWrapper from "./react-query-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Tobams Blog",
  description: "Tobams Blog",
  icons: [
    {
      rel: "icon",
      href: "/tobams-icon.png",
      url: "/tobams-icon.png",
    },
  ],
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
      >
        <QueryClientProviderWrapper>
          <Navbar />
          {children}
          <Newsletter />
          <Footer />
        </QueryClientProviderWrapper>
      </body>
    </html>
  );
}
