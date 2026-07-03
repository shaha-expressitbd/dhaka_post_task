import Image from "next/image";
import Link from "next/link";
import { NewsItem } from "@/types/news";

interface NewsCardProps {
  news: NewsItem;
  variant?: "small" | "medium";
}

export default function NewsCard({ news, variant = "small" }: NewsCardProps) {
  if (variant === "medium") {
    return (
      <Link href={`/details/${news.id}`} className="group flex flex-row gap-4 md:gap-5 items-start">
        <div className="relative w-[140px] h-[90px] md:w-[180px] md:h-[120px] lg:w-[220px] lg:h-[140px] flex-shrink-0 overflow-hidden">
          <Image
            src={news.image}
            alt={news.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
            sizes="(max-width: 768px) 140px, (max-width: 1024px) 180px, 220px"
          />
        </div>
        <div className="flex flex-col justify-center flex-1">
          <h3 className="text-[17px] md:text-xl font-bold text-slate-900 group-hover:text-blue-700 transition-colors leading-snug line-clamp-3">
            {news.title}
          </h3>
          <p className="hidden md:block text-blackmt-2 line-clamp-2 md:text-[15px]">
            {news.summary}
          </p>
        </div>
      </Link>
    );
  }

  // small variant
  return (
    <Link href={`/details/${news.id}`} className="group flex gap-4 items-center">
      <div className="relative w-[110px] h-[75px] md:w-[130px] md:h-[90px] flex-shrink-0 overflow-hidden">
        <Image
          src={news.image}
          alt={news.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 768px) 110px, 130px"
        />
      </div>
      <h3 className="text-[16px] md:text-[18px] font-semibold text-slate-900 group-hover:text-blue-700 transition-colors leading-snug line-clamp-3">
        {news.title}
      </h3>
    </Link>
  );
}
