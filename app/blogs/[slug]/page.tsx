    // app/blogs/[slug]/page.tsx

import BlogDetailSection from "@/app/sections/BlogDetailSection";

export default function BlogDetailPage() {
  return (
    <main className="blogs-page w-full overflow-visible bg-white">
      <BlogDetailSection />
    </main>
  );
}
