"use client";

// app/sections/BlogsListingSection.tsx

import Image from "next/image";
import Link from "next/link";

type BlogPost = {
  id: number;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  image: string;
  slug: string;
};

const blogs: BlogPost[] = [
  {
    id: 1,
    title: "What Is the ROI of Gemini in the Enterprise?",
    excerpt:
      "A practical AI enablement playbook for measurable returns, adoption, and enterprise transformation.",
    category: "AI Enablement",
    date: "July 8, 2026",
    image: "/blogs/blog-1.jpg",
    slug: "gemini-roi-enterprise",
  },
  {
    id: 2,
    title: "Enterprise ChatGPT Training: Curriculum, ROI, and Adoption",
    excerpt:
      "How enterprise teams can structure ChatGPT training for adoption, impact, and measurable business value.",
    category: "AI Upskilling",
    date: "July 7, 2026",
    image: "/blogs/blog-2.jpg",
    slug: "enterprise-chatgpt-training",
  },
  {
    id: 3,
    title: "Enterprises Have 2–3x More AI Licenses Than Trained Users",
    excerpt:
      "Why AI license adoption fails without proper training, governance, and workflow integration.",
    category: "Workforce Development",
    date: "June 24, 2026",
    image: "/blogs/blog-3.jpg",
    slug: "ai-licenses-trained-users",
  },
   {
    id: 4,
    title: "Enterprises Have 2–3x More AI Licenses Than Trained Users",
    excerpt:
      "Why AI license adoption fails without proper training, governance, and workflow integration.",
    category: "Workforce Development",
    date: "June 24, 2026",
    image: "/blogs/blog-3.jpg",
    slug: "ai-licenses-trained-users",
  },
   {
    id: 5,
    title: "Enterprises Have 2–3x More AI Licenses Than Trained Users",
    excerpt:
      "Why AI license adoption fails without proper training, governance, and workflow integration.",
    category: "Workforce Development",
    date: "June 24, 2026",
    image: "/blogs/blog-3.jpg",
    slug: "ai-licenses-trained-users",
  },
   {
    id: 6,
    title: "Enterprises Have 2–3x More AI Licenses Than Trained Users",
    excerpt:
      "Why AI license adoption fails without proper training, governance, and workflow integration.",
    category: "Workforce Development",
    date: "June 24, 2026",
    image: "/blogs/blog-3.jpg",
    slug: "ai-licenses-trained-users",
  },
   {
    id: 7,
    title: "Enterprises Have 2–3x More AI Licenses Than Trained Users",
    excerpt:
      "Why AI license adoption fails without proper training, governance, and workflow integration.",
    category: "Workforce Development",
    date: "June 24, 2026",
    image: "/blogs/blog-3.jpg",
    slug: "ai-licenses-trained-users",
  },
   {
    id: 8,
    title: "Enterprises Have 2–3x More AI Licenses Than Trained Users",
    excerpt:
      "Why AI license adoption fails without proper training, governance, and workflow integration.",
    category: "Workforce Development",
    date: "June 24, 2026",
    image: "/blogs/blog-3.jpg",
    slug: "ai-licenses-trained-users",
  },
];

export default function BlogsListingSection() {
  return (
    <section className="w-full bg-white px-[86px] py-[80px] max-[1200px]:px-[64px] max-[1024px]:px-[42px] max-[768px]:px-[24px] max-[480px]:px-[18px]">
      <div className="mx-auto w-full max-w-[1400px]">
        <div className="mb-[44px]">
          <p className="font-montserrat text-[12px] font-bold uppercase tracking-[4px] text-[#00FE4E]">
            Blog
          </p>

          <h2 className="mt-[8px] font-montserrat text-[46px] font-bold leading-[1.1] max-[768px]:text-[36px] max-[480px]:text-[28px]">
            <span className="inline-block bg-gradient-to-r from-[#00FE4E] to-[#000572] bg-clip-text text-transparent">
              All Blog Posts
            </span>
          </h2>
        </div>

        {blogs.length === 0 ? (
          <div className="rounded-[24px] border border-dashed border-[#E6E6F1] bg-[#fafafa] px-[24px] py-[90px] text-center">
            <h3 className="font-montserrat text-[28px] font-bold text-[#000572]">
              No blog posts at the moment
            </h3>
          </div>
        ) : (
          <div className="grid grid-cols-3 gap-[32px] max-[1024px]:grid-cols-2 max-[680px]:grid-cols-1">
            {blogs.map((blog) => (
              <article
                key={blog.id}
                className="group overflow-hidden rounded-[24px] border border-[#E6E6F1] bg-white shadow-[0_18px_55px_rgba(0,5,114,0.07)] transition-all duration-300 hover:-translate-y-[6px]"
              >
                <Link href={`/blogs/${blog.slug}`} className="block">
                  <div className="relative h-[235px] w-full overflow-hidden bg-[#000572]">
                    <Image
                      src={blog.image}
                      alt={blog.title}
                      fill
                      className="object-cover transition duration-500 group-hover:scale-105"
                    />
                  </div>

                  <div className="p-[24px]">
                    <div className="mb-[16px] flex items-center justify-between gap-[12px]">
                      <span className="rounded-full bg-[#E6E6F1] px-[13px] py-[7px] font-montserrat text-[10px] font-bold uppercase tracking-[1.4px] text-[#000572]">
                        {blog.category}
                      </span>

                      <span className="font-montserrat text-[12px] text-[#777]">
                        {blog.date}
                      </span>
                    </div>

                    <h3 className="font-montserrat text-[22px] font-bold leading-[1.25] text-[#111] group-hover:text-[#000572]">
                      {blog.title}
                    </h3>

                    <p className="mt-[12px] line-clamp-2 font-montserrat text-[14px] leading-[1.65] text-[#555]">
                      {blog.excerpt}
                    </p>

                    <div className="mt-[24px] flex items-center justify-between">
                      <span className="font-montserrat text-[13px] font-bold text-[#000572]">
                        Read article
                      </span>

                      <span className="flex h-[38px] w-[38px] items-center justify-center rounded-full bg-[#00FE4E] text-[18px] font-bold text-black">
                        →
                      </span>
                    </div>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}