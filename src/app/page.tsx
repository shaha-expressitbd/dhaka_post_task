import FeaturedNews from "@/components/FeaturedNews";
import NewsCard from "@/components/NewsCard";
import { getHomeNews } from "@/services/newsService";

export default async function Home() {
  const news = await getHomeNews();

  if (!news || news.length === 0) {
    return <div className="container mx-auto px-4 py-10 text-center">কোনো খবর পাওয়া যায়নি।</div>;
  }

  const featured = news[0];
  const rightColumnNews = news.slice(1, 4);
  const bottomRowNews = news.slice(4);

  return (
    <div className="container mx-auto max-w-7xl px-4 lg:px-6 py-8 md:py-12">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">

        {/* Left Column: Featured News */}
        <div className="lg:col-span-7 xl:col-span-8">
          <FeaturedNews news={featured} />
          <div className="bolck md:hidden h-[1px] bg-slate-300 "></div>
        </div>

        {/* Right Column: List of 3 small news items */}
        <div className="lg:col-span-5 xl:col-span-4 flex flex-col gap-6 md:gap-8">

          {rightColumnNews.map((item) => (
            <div key={item.id} className="border-b border-slate-300 pb-6 md:pb-8 last:border-0 last:pb-0">
              <NewsCard news={item} variant="small" />
            </div>
          ))}
        </div>
      </div>

      {bottomRowNews.length > 0 && (
        <>
          <div className="my-8 md:my-12 h-px w-full bg-slate-200" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {bottomRowNews.map((item) => (
              <div key={item.id} className="border-b border-slate-200 pb-6 md:pb-0 md:border-0 last:border-0 last:pb-0">
                <NewsCard news={item} variant="medium" />
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
