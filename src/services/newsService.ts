import { NewsResponse, ArticleResponse } from "@/types/news";

const HOME_API_URL = process.env.HOME_API_URL || "https://news-json.vercel.app/home.json";
const DETAILS_API_URL = process.env.DETAILS_API_URL || "https://news-json.vercel.app/details";

export async function getHomeNews() {
  const res = await fetch(HOME_API_URL, {
    next: { revalidate: 60 }
  });

  if (!res.ok) {
    throw new Error("Failed to fetch news");
  }

  const data: NewsResponse = await res.json();
  return data.news;
}

export async function getArticleDetails(id: string) {
  const res = await fetch(`${DETAILS_API_URL}/${id}.json`, {
    next: { revalidate: 60 }
  });
  
  if (!res.ok) {
    return null;
  }
  
  const data: ArticleResponse = await res.json();
  return data.article;
}
