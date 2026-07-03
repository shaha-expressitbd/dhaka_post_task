import { User, Calendar, Clock } from "lucide-react";

interface ArticleMetaProps {
  author: string;
  publishedAt: string;
  readTime: string;
}

export default function ArticleMeta({ author, publishedAt, readTime }: ArticleMetaProps) {
  const dateObj = new Date(publishedAt);
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
    <div className="flex flex-wrap items-center justify-between gap-4 text-gray-500 text-sm border-y border-gray-200 py-3 mb-8">
      <div className="flex flex-wrap items-center gap-6">
        <div className="flex items-center gap-1.5 font-bold text-gray-700">
          <User className="w-4 h-4 text-gray-400" />
          <span className="text-gray-700 text-[15px]">{author} </span>
        </div>
        <div className="flex items-center gap-1.5">
          <Calendar className="w-4 h-4 text-gray-700" />
          <span className="text-gray-700 text-[15px]">{displayDate}</span>
        </div>
      </div>
      <div className="flex items-center gap-1.5">
        <Clock className="w-4 h-4 text-gray-700" />
        <span className="text-gray-700 text-[15px]">{readTime} পাঠ</span>
      </div>
    </div>
  );
}
