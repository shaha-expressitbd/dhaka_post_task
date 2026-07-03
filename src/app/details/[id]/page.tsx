import { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { getArticleDetails } from "@/services/newsService";
import ArticleMeta from "@/components/article/ArticleMeta";
import ShareSection from "@/components/article/ShareSection";

type Props = {
  params: Promise<{ id: string }>;
};

export async function generateMetadata(
  { params }: Props
): Promise<Metadata> {
  const p = await params;
  const article = await getArticleDetails(p.id);

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
  const article = await getArticleDetails(p.id);

  if (!article) {
    notFound();
  }

  return (
    <article className="container mx-auto px-4 lg:px-0 py-16 max-w-[800px]">
      {/* Category Tag */}
      <div className="mb-4">
        <span className="inline-block bg-[#D7E0F7] text-gray-600 px-2 py-0.5 text-[16px] rounded font-medium">
          {article.category}
        </span>
      </div>

      {/* Title */}
      <h1 className="text-3xl md:text-4xl lg:text-[52px] font-bold text-[#061838] leading-tight mb-6">
        {article.title}
      </h1>

      {/* Subtitle / Intro */}
      {article.subtitle && (
        <div className="border-l-2 border-gray-500 pl-4 mb-8">
          <p className="text-lg md:text-[18px] text-gray-700 font-medium leading-relaxed">
            {article.subtitle}
          </p>
        </div>
      )}

      {/* Meta info */}
      <ArticleMeta 
        author={article.author} 
        publishedAt={article.published_at} 
        readTime={article.read_time} 
      />

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
        <p className="text-sm text-gray-700 mt-3 text-center italic">
          ছবি: দেশের উপকূলীয় জেলাগুলোতে বৃষ্টির দাপট বাড়ছে।
        </p>
      </div>

      {/* Article Content */}
      <div
        className="prose max-w-none mb-12 
        prose-headings:text-[#061838] prose-headings:font-bold prose-headings:text-[22px] prose-headings:mt-8 prose-headings:mb-4
        prose-p:text-[#333333] prose-p:text-[18px] prose-p:leading-[1.6] prose-p:mb-5
        prose-a:text-blue-600 hover:prose-a:text-blue-700 
        [&_ul]:[list-style-type:square] prose-ul:pl-5 prose-ul:my-4
        prose-li:text-[#333333] prose-li:text-[16px] prose-li:marker:text-[#061838] prose-li:m-0
        prose-blockquote:border-l-[4px] prose-blockquote:border-[#061838] prose-blockquote:text-[#333333] prose-blockquote:italic prose-blockquote:py-1 prose-blockquote:px-5 prose-blockquote:my-8 prose-blockquote:font-normal"
        dangerouslySetInnerHTML={{ __html: article.content }}
      />

      {/* Tags */}
      {article.tags && article.tags.length > 0 && (
        <div className="flex flex-wrap gap-3 mb-10">
          {article.tags.map((tag, i) => (
            <span key={i} className="bg-[#E8EDFF] text-gray-800 px-4 py-2 text-[16px] font-medium hover:bg-[#c4cde3] cursor-pointer transition-colors">
              # {tag}
            </span>
          ))}
        </div>
      )}

      {/* Share Section */}
      <ShareSection />
    </article>
  );
}
