import { cache } from "react";
import { Metadata } from "next";
import Image from "next/image";
import { ArticleResponse } from "@/types/news";
import { notFound } from "next/navigation";
import { Share2, Bookmark, Printer, User, Calendar, Clock } from "lucide-react";

const getArticle = cache(async (id: string) => {
  const detailsApiUrl = process.env.DETAILS_API_URL || "https://news-json.vercel.app/details";
  const res = await fetch(`${detailsApiUrl}/${id}.json`);
  if (!res.ok) return null;
  const data: ArticleResponse = await res.json();
  return data.article;
});

type Props = {
  params: Promise<{ id: string }>;
};

export async function generateMetadata(
  { params }: Props
): Promise<Metadata> {
  const p = await params;
  const article = await getArticle(p.id);

  if (!article) {
    return {
      title: "Article Not Found",
    };
  }

  return {
    title: `${article.title} | ঢাকা পোস্ট`,
    description: article.subtitle,
    openGraph: {
      title: article.title,
      description: article.subtitle,
      images: [article.image],
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.subtitle,
      images: [article.image],
    },
  };
}

export default async function DetailsPage({ params }: Props) {
  const p = await params;
  const article = await getArticle(p.id);

  if (!article) {
    notFound();
  }

  // Format date roughly matching screenshot
  const dateObj = new Date(article.published_at);
  const formattedDate = dateObj.toLocaleDateString('bn-BD', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  });
  const formattedTime = dateObj.toLocaleTimeString('bn-BD', {
    hour: 'numeric',
    minute: 'numeric'
  });
  const displayDate = `${formattedDate} | ${formattedTime}`;

  return (
    <article className="container mx-auto px-4 lg:px-0 py-8 max-w-[800px]">
      {/* Category Tag */}
      <div className="mb-4">
        <span className="inline-block bg-[#e8eef6] text-[#1b4382] px-2 py-0.5 text-xs font-semibold rounded">
          {article.category}
        </span>
      </div>

      {/* Title */}
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#061838] leading-tight mb-6">
        {article.title}
      </h1>

      {/* Subtitle / Intro */}
      {article.subtitle && (
        <div className="border-l-2 border-gray-400 pl-4 mb-8">
          <p className="text-lg md:text-[16px] text-gray-700 font-medium leading-relaxed">
            {article.subtitle}
          </p>
        </div>
      )}

      {/* Meta info */}
      <div className="flex flex-wrap items-center justify-between gap-4 text-gray-500 text-sm border-y border-gray-200 py-3 mb-8">
        <div className="flex flex-wrap items-center gap-6">
          <div className="flex items-center gap-1.5 font-medium text-gray-700">
            <User className="w-4 h-4 text-gray-400" />
            {article.author}
          </div>
          <div className="flex items-center gap-1.5">
            <Calendar className="w-4 h-4 text-gray-400" />
            <span>{displayDate}</span>
          </div>
        </div>
        <div className="flex items-center gap-1.5">
          <Clock className="w-4 h-4 text-gray-400" />
          <span>{article.read_time} পাঠ</span>
        </div>
      </div>

      {/* Main Image */}
      <div className="mb-10">
        <div className="relative w-full aspect-[16/10] overflow-hidden bg-gray-100">
          <Image
            src={article.image}
            alt={article.title}
            fill
            className="object-cover"
            priority
            sizes="(max-width: 800px) 100vw, 800px"
          />
        </div>
        <p className="text-sm text-gray-500 mt-3 text-center italic">
          ছবি: দেশের উপকূলীয় জেলাগুলোতে বৃষ্টির দাপট বাড়ছে।
        </p>
      </div>

      {/* Article Content */}
      <div
        className="prose max-w-none mb-12 
        prose-headings:text-[#061838] prose-headings:font-bold prose-headings:text-[22px] prose-headings:mt-8 prose-headings:mb-4
        prose-p:text-[#333333] prose-p:text-[18px] prose-p:leading-[1.6] prose-p:mb-5
        prose-a:text-blue-600 hover:prose-a:text-blue-700 
        [&_ul]:[list-style-type:square] prose-ul:pl-5 
        prose-li:text-[#333333] prose-li:text-[18px] prose-li:marker:text-[#061838] prose-li:mb-2
        prose-blockquote:border-l-[4px] prose-blockquote:border-[#061838] prose-blockquote:text-[#333333] prose-blockquote:italic prose-blockquote:py-1 prose-blockquote:px-5 prose-blockquote:my-8 prose-blockquote:font-normal"
        dangerouslySetInnerHTML={{ __html: article.content }}
      />

      {/* Tags */}
      {article.tags && article.tags.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-8">
          {article.tags.map((tag, i) => (
            <span key={i} className="bg-[#f3f4f6] text-[#4b5563] px-3 py-1 rounded text-sm hover:bg-gray-200 cursor-pointer transition-colors">
              # {tag}
            </span>
          ))}
        </div>
      )}

      {/* Share Section */}
      <div className="bg-[#f8f9fa] rounded-lg px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-4">
        <span className="font-bold text-[#061838] text-[15px]">নিউজটি শেয়ার করুন:</span>
        <div className="flex gap-3">
          <button aria-label="Share on Network" className="w-9 h-9 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-500 hover:text-blue-600 hover:border-blue-600 transition-colors shadow-sm">
            <Share2 className="w-[18px] h-[18px]" />
          </button>
          <button aria-label="Bookmark" className="w-9 h-9 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-500 hover:text-blue-600 hover:border-blue-600 transition-colors shadow-sm">
            <Bookmark className="w-[18px] h-[18px]" />
          </button>
          <button aria-label="Print" className="w-9 h-9 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-500 hover:text-blue-600 hover:border-blue-600 transition-colors shadow-sm">
            <Printer className="w-[18px] h-[18px]" />
          </button>
        </div>
      </div>
    </article>
  );
}
