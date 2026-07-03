"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Optionally log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="container mx-auto px-4 py-20 flex flex-col items-center justify-center min-h-[50vh] text-center">
      <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">দুঃখিত, একটি সমস্যা হয়েছে!</h2>
      <p className="text-blackmb-8 max-w-md">
        আমরা সাময়িক অসুবিধার জন্য দুঃখিত। অনুগ্রহ করে আবার চেষ্টা করুন।
      </p>
      <button
        onClick={() => reset()}
        className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-lg transition-colors"
      >
        পুনরায় চেষ্টা করুন
      </button>
    </div>
  );
}
