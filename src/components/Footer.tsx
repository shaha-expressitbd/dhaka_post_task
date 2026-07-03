import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-[#DCE2F2] py-14 mt-12 text-center">
      <div className="container mx-auto px-4 flex flex-col items-center">
        {/* Logo */}
        <Link href="/">
          <h2 className="text-[26px] font-bold text-[#061838] mb-6">ঢাকা পোস্ট</h2>
        </Link>

        {/* Links */}
        <div className="flex flex-wrap justify-center gap-6 sm:gap-10 text-gray-500 font-medium mb-6 text-[15px]">
          <Link href="#" className="hover:text-[#061838] transition-colors">আমাদের সম্পর্কে</Link>
          <Link href="#" className="hover:text-[#061838] transition-colors">যোগাযোগ</Link>
          <Link href="#" className="hover:text-[#061838] transition-colors">গোপনীয়তা নীতি</Link>
          <Link href="#" className="hover:text-[#061838] transition-colors">বিজ্ঞাপন</Link>
        </div>

        {/* Copyright */}
        <p className="text-[#64748b] text-[13px]">
          © ২০২৪ মেট্রো নিউজ | সর্বস্বত্ব সংরক্ষিত
        </p>
      </div>
    </footer>
  );
}
