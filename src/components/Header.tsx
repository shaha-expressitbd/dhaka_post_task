import Link from "next/link";
import { Search, User, Menu } from "lucide-react";

export default function Header() {
  return (
    <header className="w-full bg-white border-b border-slate-300 sticky top-0 z-50 py-2.5" >
      <div className="container max-w-7xl mx-auto px-4 lg:px-6 h-14 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex-shrink-0">
          <h1 className="text-2xl lg:text-[50px] font-bold text-slate-900 tracking-tight">ঢাকা পোস্ট</h1>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6 lg:space-x-8 text-gray-600 font-medium font-hind text-[16px]">
          <Link href="#" className="hover:text-blue-600 transition-colors">বিশ্ব</Link>
          <Link href="#" className="hover:text-blue-600 transition-colors">ব্যবসা</Link>
          <Link href="#" className="hover:text-blue-600 transition-colors">প্রযুক্তি</Link>
          <Link href="#" className="hover:text-blue-600 transition-colors">রাজনীতি</Link>
          <Link href="#" className="hover:text-blue-600 transition-colors">সংস্কৃতি</Link>
          <Link href="#" className="hover:text-blue-600 transition-colors">মতামত</Link>
        </nav>

        {/* Action Icons */}
        <div className="flex items-center space-x-4 text-slate-600">
          <button aria-label="Search" className="hover:text-blue-600 transition-colors">
            <Search className="w-5 h-5" />
          </button>
          <button aria-label="User Profile" className="hover:text-blue-600 transition-colors">
            <User className="w-5 h-5" />
          </button>
          <button aria-label="Menu" className="md:hidden hover:text-blue-600 transition-colors">
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>
    </header>
  );
}
