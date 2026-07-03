# Dhaka Post - Frontend Task

**🌐 Live Demo:** [https://dhaka-post-task-six.vercel.app/](https://dhaka-post-task-six.vercel.app/) | **👨‍💻 Portfolio:** [smaran.me](https://smaran.me)

This is a pixel-perfect, fully responsive news portal frontend built with **Next.js 14+ (App Router)**, **Tailwind CSS**, and **TypeScript**. The project adheres to senior software architecture standards with a highly modular and production-ready component design.

## 🚀 Features

- **Pixel-Perfect UI**: Precisely crafted to match the provided design screenshots across all device breakpoints.
- **Fully Responsive**: Seamless layout transitions from mobile to tablet and large desktop screens (custom Mobile Sidebar Navigation included).
- **Component-Based Architecture**: Highly modular structure with reusable React components like `NewsCard`, `FeaturedNews`, `ArticleMeta`, and `ShareSection`.
- **Server Components & SSR**: Optimized performance using React Server Components where possible, alongside robust server-side data fetching.
- **Dynamic Metadata**: SEO-friendly dynamic metadata (Title, Description, Open Graph, Twitter Cards) on the details page based on the fetched news article.
- **API Service Layer**: Centralized API calls within `src/services/newsService.ts`, ensuring separation of concerns.
- **Optimized Fonts & Imagery**: Implementation of Google Fonts (`Hind Siliguri` and `Tiro Bangla`) with `next/image` for highly optimized assets.

## 📁 Project Structure

```text
src/
├── app/
│   ├── details/[id]/    # Dynamic route for news article details
│   ├── globals.css      # Global Tailwind styles
│   ├── layout.tsx       # Root layout including fonts and global UI
│   └── page.tsx         # Home page (Server Component)
├── components/
│   ├── article/         # Reusable article components (ShareSection, ArticleMeta)
│   ├── layout/          # Global layout components (Header, Footer)
│   └── news/            # Core news components (NewsCard, FeaturedNews)
├── config/
│   └── site.ts          # Centralized configuration (e.g., Navigation Links)
├── services/
│   └── newsService.ts   # Centralized API fetch logic with cache()
└── types/
    └── news.ts          # TypeScript interfaces for API responses
```

## 🛠️ Tech Stack

- **Framework**: [Next.js (App Router)](https://nextjs.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Icons**: [Lucide React](https://lucide.dev/)

## ⚙️ Environment Variables

Create a `.env` file in the root directory and add the following API endpoints:

```env
API_URL=https://news-json.vercel.app
HOME_API_URL=https://news-json.vercel.app/home.json
DETAILS_API_URL=https://news-json.vercel.app/details
```

## 💻 Getting Started

First, install the dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 📋 Architectural Decisions

- **React `cache()`**: Utilized in `newsService.ts` to ensure that duplicate API requests (e.g., calling data for `generateMetadata` and the actual `page.tsx`) are efficiently memoized and deduplicated.
- **Client vs Server Components**: Maintained strict discipline in keeping components server-side by default. Only the `Header.tsx` is a client component to handle the mobile sidebar toggle state.
- **Instant Navigation**: Explicitly removed `loading.tsx` to enable instantaneous page transitions without jarring layout shifts or spinners, maximizing perceived performance.
