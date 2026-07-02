import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-slate-100 py-10 mt-12 border-t border-slate-200 text-center">
      <div className="container mx-auto px-4 flex flex-col items-center">
        {/* Logo */}
        <Link href="/">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">ঢাকা পোস্ট</h2>
        </Link>

        {/* Links */}
        <div className="flex flex-wrap justify-center gap-4 sm:gap-8 text-slate-600 font-medium mb-8">
          <Link href="#" className="hover:text-blue-600 transition-colors">আমাদের সম্পর্কে</Link>
          <Link href="#" className="hover:text-blue-600 transition-colors">যোগাযোগ</Link>
          <Link href="#" className="hover:text-blue-600 transition-colors">গোপনীয়তা নীতি</Link>
          <Link href="#" className="hover:text-blue-600 transition-colors">বিজ্ঞাপন</Link>
        </div>

        {/* Copyright */}
        <p className="text-slate-500 text-sm">
          © ২০২৪ ঢাকা পোস্ট | সর্বস্বত্ব সংরক্ষিত।
        </p>
      </div>
    </footer>
  );
}
