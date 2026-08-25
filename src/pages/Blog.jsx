import { Code2, Layers, FileCode2, LayoutTemplate, PenTool, Search, Briefcase, Rocket, BookOpen } from "lucide-react";
import Navbar from "../components/layout/Navbar.jsx";
import Footer from "../components/sections/Footer.jsx";
import PageHeader from "../components/ui/PageHeader.jsx";
import SectionHeading from "../components/ui/SectionHeading.jsx";
import CTASection from "../components/ui/CTASection.jsx";

const CATEGORIES = [
  { icon: Code2, label: "Web Development" },
  { icon: Layers, label: "Laravel Development" },
  { icon: FileCode2, label: "React Development" },
  { icon: LayoutTemplate, label: "WordPress & WooCommerce" },
  { icon: PenTool, label: "UI/UX Design" },
  { icon: Search, label: "SEO & Website Performance" },
  { icon: Briefcase, label: "Business Technology" },
  { icon: Rocket, label: "Digital Transformation" },
];

const ARTICLES = [
  { n: "00", title: "Introduction to Creoture", category: "Business Technology" },
  { n: "01", title: "Why Every Business Needs a Professional Website in 2026", category: "Web Development" },
  { n: "02", title: "Laravel vs WordPress: Choosing the Right Platform", category: "Laravel Development" },
  { n: "03", title: "10 Website Performance Tips That Improve User Experience", category: "SEO & Website Performance" },
  { n: "04", title: "How UI/UX Design Impacts Business Growth", category: "UI/UX Design" },
  { n: "05", title: "Essential Security Practices for Business Websites", category: "Web Development" },
  { n: "06", title: "Common Website Mistakes That Cost Customers", category: "Business Technology" },
  { n: "07", title: "Benefits of Custom Web Applications", category: "React Development" },
  { n: "08", title: "How to Prepare Your Business for Digital Growth", category: "Digital Transformation" },
];

function Blog() {
  return (
    <div className="min-h-screen bg-base">
      <Navbar />
      <main>
        <PageHeader
          eyebrow="Creoture Blog"
          title="Insights for Building a Stronger Digital Presence"
          description="Practical insights, development tutorials, industry trends, SEO strategies, UI/UX tips, and digital transformation guidance to help businesses grow online."
        />

        {/* Categories */}
        <section className="px-4 sm:px-6 pb-14">
          <div className="mx-auto max-w-6xl flex flex-wrap items-center justify-center gap-3">
            {CATEGORIES.map(({ icon: Icon, label }) => (
              <span
                key={label}
                className="inline-flex items-center gap-2 rounded-full border border-base-border bg-base-card px-4 py-2 font-mono text-xs text-zinc-400"
              >
                <Icon size={14} className="text-brand-orange" />
                {label}
              </span>
            ))}
          </div>
        </section>

        {/* Articles */}
        <section className="px-4 sm:px-6 pb-20 sm:pb-28">
          <div className="mx-auto max-w-5xl flex flex-col gap-10">
            <SectionHeading
              eyebrow="Suggested Articles"
              title="From the Blog"
              description="Fresh write-ups are on the way - here's what's queued up next."
            />

            <div className="rounded-xl border border-base-border bg-base-card divide-y divide-base-border overflow-hidden">
              {ARTICLES.map((article) => (
                <div
                  key={article.n}
                  className="flex items-center gap-4 sm:gap-6 px-5 sm:px-6 py-4 sm:py-5 transition-colors hover:bg-white/[0.02]"
                >
                  <span className="font-mono text-xs text-zinc-600 shrink-0 w-8">{article.n}</span>
                  <BookOpen size={16} className="text-brand-blue-light shrink-0" />
                  <div className="min-w-0 flex-1">
                    <p className="!text-white text-sm sm:text-base font-medium leading-snug truncate">
                      {article.title}
                    </p>
                    <p className="font-mono text-[11px] text-zinc-500 mt-0.5">{article.category}</p>
                  </div>
                  <span className="shrink-0 rounded-full border border-base-border px-3 py-1 font-mono text-[10px] text-zinc-500">
                    coming soon
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <CTASection
          title="Have a Topic You Want Us to Cover?"
          description="Get in touch and we'll consider it for an upcoming article."
        />
      </main>
      <Footer />
    </div>
  );
}

export default Blog;
