export interface NewsItem {
  id: string;
  title: string;
  summary: string;
  image: string;
  source: string;
  category: string;
  published_at: string;
  details_url: string;
}

export interface NewsResponse {
  status: boolean;
  updated_at: string;
  total: number;
  news: NewsItem[];
}

export interface ArticleDetail {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  source: string;
  author: string;
  category: string;
  published_at: string;
  read_time: string;
  content: string;
  tags: string[];
  original_url: string;
}

export interface ArticleResponse {
  status: boolean;
  article: ArticleDetail;
}
