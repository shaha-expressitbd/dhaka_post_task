import type { Metadata } from "next";
import { Tiro_Bangla, Hind_Siliguri } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const tiroBangla = Tiro_Bangla({
  subsets: ["bengali"],
  weight: "400",
  variable: "--font-tiro-bangla",
});

const hindSiliguri = Hind_Siliguri({
  subsets: ["bengali", "latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-hind-siliguri",
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
    <html lang="bn" className={`${tiroBangla.variable} ${hindSiliguri.variable} antialiased`}>
      <body className="min-h-screen flex flex-col bg-white text-slate-900 font-sans">
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
