import type { Metadata } from "next";
import { Noto_Sans_Bengali } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const notoSansBengali = Noto_Sans_Bengali({
  subsets: ["bengali"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-noto-sans-bengali",
});

export const metadata: Metadata = {
  title: "ঢাকা পোস্ট | Dhaka Post",
  description: "সর্বশেষ সংবাদ - ঢাকা পোস্ট",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="bn" className={`${notoSansBengali.variable} antialiased`}>
      <body className="min-h-screen flex flex-col bg-slate-50 text-slate-900 font-sans">
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
