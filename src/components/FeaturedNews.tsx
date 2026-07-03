import Image from "next/image";
import Link from "next/link";
import { NewsItem } from "@/types/news";

export default function FeaturedNews({ news }: { news: NewsItem }) {
  return (
    <Link href={`/details/${news.id}`} className="group block mb-6 md:mb-0">
      <div className="flex flex-col gap-4">
        <div className="relative w-full aspect-video overflow-hidden">
          <Image
            src={news.image}
            alt={news.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
            sizes="(max-width: 768px) 100vw, 65vw"
            priority
          />
        </div>
        <div>
          <h2 className="text-2xl md:text-3xl lg:text-[34px] font-bold text-slate-900 group-hover:text-blue-700 transition-colors leading-snug">
            {news.title}
          </h2>
          <p className="text-gray-500 md:text-[16px] leading-relaxed">
            {news.summary}
          </p>
        </div>
      </div>
    </Link>
  );
}
