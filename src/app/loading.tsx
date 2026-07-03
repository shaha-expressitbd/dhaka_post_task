export default function Loading() {
  return (
    <div className="container mx-auto px-4 py-20 flex flex-col items-center justify-center min-h-[50vh]">
      <div className="w-12 h-12 border-4 border-slate-200 border-t-blue-600 rounded-full animate-spin"></div>
      <p className="mt-4 text-blackfont-medium text-lg animate-pulse">লোড হচ্ছে...</p>
    </div>
  );
}
