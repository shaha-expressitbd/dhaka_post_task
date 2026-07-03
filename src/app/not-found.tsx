import Link from "next/link";

export default function NotFound() {
  return (
    <div className="container mx-auto px-4 py-20 flex flex-col items-center justify-center min-h-[50vh] text-center">
      <h2 className="text-6xl font-bold text-slate-200 mb-4">৪০৪</h2>
      <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">পৃষ্ঠাটি পাওয়া যায়নি</h3>
      <p className="text-blackmb-8 max-w-md">
        আপনি যে পৃষ্ঠাটি খুঁজছেন তা সরানো হয়েছে, নাম পরিবর্তন করা হয়েছে অথবা সাময়িকভাবে অনুপলব্ধ।
      </p>
      <Link
        href="/"
        className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-lg transition-colors inline-block"
      >
        প্রচ্ছদে ফিরে যান
      </Link>
    </div>
  );
}
