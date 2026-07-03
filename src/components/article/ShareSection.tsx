import { Share2, Bookmark, Printer } from "lucide-react";

export default function ShareSection() {
  return (
    <div className="bg-[#F1F3FF] px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4 border-b border-[#E1E5F2]">
      <span className="font-bold text-[#061838] text-[16px]">নিউজটি শেয়ার করুন:</span>
      <div className="flex gap-4">
        <button aria-label="Share on Network" className="w-10 h-10 rounded-full bg-transparent border border-[#d1d9e6] flex items-center justify-center text-[#64748b] hover:text-[#061838] hover:border-[#061838] transition-colors">
          <Share2 className="w-[18px] h-[18px]" />
        </button>
        <button aria-label="Bookmark" className="w-10 h-10 rounded-full bg-transparent border border-[#d1d9e6] flex items-center justify-center text-[#64748b] hover:text-[#061838] hover:border-[#061838] transition-colors">
          <Bookmark className="w-[18px] h-[18px]" />
        </button>
        <button aria-label="Print" className="w-10 h-10 rounded-full bg-transparent border border-[#d1d9e6] flex items-center justify-center text-[#64748b] hover:text-[#061838] hover:border-[#061838] transition-colors">
          <Printer className="w-[18px] h-[18px]" />
        </button>
      </div>
    </div>
  );
}
