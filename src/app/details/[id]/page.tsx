import { cache } from "react";
import { Metadata } from "next";
import Image from "next/image";
import { ArticleResponse } from "@/types/news";
import { notFound } from "next/navigation";
import { Share2, Link as LinkIcon } from "lucide-react";

const getArticle = cache(async (id: string) => {
  const apiUrl = process.env.API_URL || "https://news-json.vercel.app";
  const res = await fetch(`${apiUrl}/details/${id}.json`);
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

  return (
    <article className="container mx-auto px-4 lg:px-8 py-8 md:py-12 max-w-4xl">
      {/* Category Tag */}
      <div className="mb-6">
        <span className="inline-block bg-blue-50 text-blue-700 px-3 py-1 text-sm font-semibold rounded">
          {article.category}
        </span>
      </div>

      {/* Title */}
      <h1 className="text-3xl md:text-4xl lg:text-[40px] font-bold text-slate-900 leading-tight mb-6">
        {article.title}
      </h1>

      {/* Meta info */}
      <div className="flex flex-wrap items-center gap-4 text-slate-600 text-sm md:text-base border-b border-slate-200 pb-6 mb-8">
        <div className="flex items-center gap-2 font-medium text-slate-800">
          <span className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center">
            <span className="text-slate-500 text-lg">👤</span>
          </span>
          {article.author}
        </div>
        <div className="flex items-center gap-4 ml-auto">
          <span>📅 {new Date(article.published_at).toLocaleDateString('bn-BD', { day: 'numeric', month: 'long', year: 'numeric', hour: 'numeric', minute: 'numeric' })}</span>
          <span>⏱️ {article.read_time} পাঠ</span>
        </div>
      </div>

      {/* Main Image */}
      <div className="mb-10">
        <div className="relative w-full aspect-video rounded-lg overflow-hidden bg-slate-100">
          <Image
            src={article.image}
            alt={article.title}
            fill
            className="object-cover"
            priority
            sizes="(max-width: 1024px) 100vw, 896px"
          />
        </div>
        <p className="text-sm text-slate-500 mt-3 italic text-center">
          ছবি: দেশের উপকূলীয় জেলাগুলোতে বৃষ্টির দাপট বাড়ছে।
        </p>
      </div>

      {/* Subtitle / Intro */}
      {article.subtitle && (
        <p className="text-xl md:text-2xl text-slate-800 font-medium leading-relaxed mb-8">
          {article.subtitle}
        </p>
      )}

      {/* Article Content */}
      <div
        className="prose prose-lg prose-slate max-w-none mb-12 prose-headings:font-bold prose-a:text-blue-600 hover:prose-a:text-blue-700"
        dangerouslySetInnerHTML={{ __html: article.content }}
      />

      {/* Tags */}
      {article.tags && article.tags.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-8">
          {article.tags.map((tag, i) => (
            <span key={i} className="bg-slate-100 text-slate-700 px-3 py-1 rounded text-sm hover:bg-slate-200 cursor-pointer transition-colors">
              # {tag}
            </span>
          ))}
        </div>
      )}

      {/* Share Section */}
      <div className="bg-slate-50 rounded-xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4 border border-slate-100">
        <span className="font-bold text-slate-800 text-lg">নিউজটি শেয়ার করুন:</span>
        <div className="flex gap-3">
          <button aria-label="Share on Facebook" className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-600 hover:text-blue-600 hover:border-blue-600 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
          </button>
          <button aria-label="Share on Twitter" className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-600 hover:text-blue-400 hover:border-blue-400 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
          </button>
          <button aria-label="Copy Link" className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-600 hover:text-slate-900 hover:border-slate-900 transition-colors">
            <LinkIcon className="w-5 h-5" />
          </button>
          <button aria-label="Share options" className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-600 hover:text-slate-900 hover:border-slate-900 transition-colors">
            <Share2 className="w-5 h-5" />
          </button>
        </div>
      </div>
    </article>
  );
}
