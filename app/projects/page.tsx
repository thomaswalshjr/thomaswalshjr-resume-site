// app/projects/page.tsx
"use client";

import { useMemo, useState } from "react";
import Image from "next/image";


/* ---------------------------------------------
   Local design tokens (aligns with your site)
----------------------------------------------*/
const BRAND_WHITE = "#ffffff";
const BRAND_PRIMARY = "#111827"; // button blue (Tailwind blue-700)
const BADGE_BG = "#ccfbf1"; // teal-100
const BADGE_TEXT = "#0f766e"; // teal-700
const BORDER = "rgba(17,24,39,.12)"; // slate-800 @ ~12%
const TEXT_MUTED = "#475569"; // slate-600

/* ---------------------------------------------
   Types & Data
----------------------------------------------*/
type Category = "E-Commerce" | "Customer Journey" | "Data Initiatives";

type Project = {
  id: string;
  title: string;
  industry: string;
  alt: string;
  result: string;
  stack?: string[];
  category: Category;
  image?: string;
  href?: string;
};

const PROJECTS: Project[] = [
  {
    id: "dxp-digital-transformation",
    category: "E-Commerce",
    title: "Led Digital Transformation with DXP E-Commerce Rollout",
    industry: "Manufacturing",
    alt:
      "Drove the complete go-to-market strategy for the company's first digital purchasing platform, successfully transitioning key partners to a new self-service model. I translated complex inventory data and business needs into a simple, human-centered purchasing journey that accelerated product adoption.",
    result: "The platform generated a 20% incremental increase in distributor sales, underscoring the project's strategic impact.",
    stack: ["Digital Strategy", "Requirements Definition", "Cross-Functional Collaboration"],
    image: "/projects/ecom-checkout.png",
    href: "/projects/dxp-digital-transformation",
  },
  {
    id: "pim-implementation",
    category: "Data Initiatives",
    title: "Consolidated Product Data into a Single PIM Platform",
    industry: "Manufacturing",
    alt:
      "Established the company's single source of truth for product storytelling by creating its first centralized PIM system. I orchestrated the complex process of unifying and enriching data for 50,000+ products, enabling precise, consistent, and compelling product narratives to flow to our new DXP and partner channels for the first time.",
    result: "Enabled 50,000+ SKUs with enriched product data to flow seamlessly into the new DXP platform and distributor websites.",
    stack: ["Data Governance", "Product Information Management (PIM)", "Data Integration"],
    image: "/projects/saas-dashboard.png",
    href: "/projects/pim-implementation",
  },
  {
    id: "dxp-platform-adoption",
    category: "Customer Journey",
    title: "Championed Customer Success Through Intuitive Onboarding",
    industry: "Manufacturing",
    alt:
      "Maximized product adoption and long-term retention by designing the complete onboarding journey for a new digital platform. I synthesized customer insights to create a suite of member-facing content and educational materials that translated a complex new workflow into a simple, human-centered experience.",
    result: "Secured rapid adoption, with 1,000+ of the most active customers purchasing online within 60 days.",
    stack: ["Adoption & Engagement", "Customer Onboarding"],
    image: "/projects/seo-analytics.png",
    href: "/projects/dxp-platform-adoption",
  },
    {
    id: "product-positioning-messaging",
    category: "Customer Journey",
    title: "Made a Product's Value Clear and Compelling",
    industry: "Manufacturing",
    alt:
      "Owned product storytelling by reframing technical details into benefit-driven messages that were relevant to end-users. I turned these core messages into practical sales kits and marketing materials that broke down complex features into simple benefits. This gave our partner teams the confidence to have more effective customer conversations, enabling us to tell a clear, compelling story in the market.",
    result: "Improved distributor confidence and consistency in go-to-market execution, reinforcing product value in customer conversations.",
    stack: ["Storytelling", "Adoption & Engagement", "Cross-Functional Collaboration"],
    image: "/projects/seo-analytics.png",
    href: "/projects/product-positioning-messaging",
  },
      {
    id: "mobile-app-adoption",
    category: "Customer Journey",
    title: "Crafted the Onboarding Journey to Scale a Consumer Mobile App",
    industry: "SaaS Technology",
    alt:
      "Developed educational materials and campaigns to highlight the app’s convenience and value, partnering with creative teams to produce signage, digital assets, and promotional offers. Crafted how-to resources that made adoption effortless for new users.",
    result: "Helped drive app growth from ~80,000 to over 1 million users during tenure.",
    stack: ["Storytelling", "Adoption & Engagement", "Cross-Functional Collaboration"],
    image: "/projects/seo-analytics.png",
    href: "/projects/mobile-app-adoption",
  },
];

/* ---------------------------------------------
   Small UI helpers
----------------------------------------------*/
function Chip({
  active,
  children,
  onClick,
}: {
  active?: boolean;
  children: React.ReactNode;
  onClick?: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={[
        "rounded-full border px-4 py-2 text-sm font-medium transition-colors",
        active
          ? "border-slate-300 bg-white text-slate-900 shadow-sm"
          : "border-slate-200 bg-slate-50 text-slate-700 hover:bg-white",
      ].join(" ")}
      type="button"
    >
      {children}
    </button>
  );
}

function MetaPill({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-md bg-slate-100 px-3 py-1 text-sm text-slate-700">
      {children}
    </span>
  );
}

/* ---------------------------------------------
   Card Component
----------------------------------------------*/
function ProjectCard({
  project,
}: {
  project: Project;
}) {
  return (
    <div
      className="rounded-xl bg-white p-5 sm:p-6"
      style={{ border: `1px solid ${BORDER}` }}
    >
      <div className="grid grid-cols-[112px_1fr] gap-5 sm:gap-6">
        {/* Image / placeholder */}
        <div
          className="flex h-[112px] w-[112px] items-center justify-center rounded-lg bg-slate-100 text-center text-xs text-slate-500"
          style={{ border: `1px solid ${BORDER}` }}
        >
          {project.image ? (
            <Image
              src={project.image}
              alt=""
              width={112}
              height={112}
              className="h-[112px] w-[112px] rounded-lg object-cover"
            />
          ) : (
            <span>
              alt text:
              <br />
              Screenshot placeholder
            </span>
          )}
        </div>

        {/* Content */}
        <div>
          <h3 className="text-xl font-semibold text-slate-900 sm:text-2xl">
            {project.title}
          </h3>

          <p className="mt-2 text-sm leading-relaxed" style={{ color: BRAND_PRIMARY }}>
            {project.industry}
          </p>

          <p className="mt-2 text-sm leading-relaxed" style={{ color: TEXT_MUTED }}>
            {project.alt}
          </p>

          {/* Result badge */}
          <div className="mt-3 flex items-center gap-2">
            <span
              className="rounded-full px-2.5 py-1 text-xs font-semibold"
              style={{ background: BADGE_BG, color: BADGE_TEXT }}
            >
              Result:
            </span>
            <span className="text-sm text-slate-800">{project.result}</span>
          </div>

          {/* Meta row */}
          <div className="mt-4 flex flex-wrap items-center gap-2">
            {project.stack?.map((s) => (
              <MetaPill key={s}>{s}</MetaPill>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ---------------------------------------------
   Page
----------------------------------------------*/
export default function ProjectsPage() {
  const [filter, setFilter] = useState<"All" | Category>("All");

  const filtered = useMemo(() => {
    if (filter === "All") return PROJECTS;
    return PROJECTS.filter((p) => p.category === filter);
  }, [filter]);

  return (
    <div className="min-h-screen bg-slate-50 my-16">
      {/* Page header */}
    <header className="w-full py-16" style={{ background: BRAND_WHITE }}>
        <div className="container mx-auto max-w-6xl px-4">
            <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">Projects</h1>
            <p className="mt-4 max-w-3xl text-base text-gray-700 sm:text-md">
            Find more information about my professional experience on LinkedIn
            </p>
        </div>
    </header>

      {/* Filters */}
      <div className="container mx-auto max-w-6xl px-4">
        <div className="-mt-6 flex flex-wrap items-center gap-3 rounded-xl bg-white border-1 border-teal-400 p-4 shadow-sm ring-1 ring-slate-200/60">
          <Chip active={filter === "All"} onClick={() => setFilter("All")}>
            All
          </Chip>
          <Chip active={filter === "E-Commerce"} onClick={() => setFilter("E-Commerce")}>
            E-Commerce
          </Chip>
          <Chip active={filter === "Customer Journey"} onClick={() => setFilter("Customer Journey")}>
            Customer Journey
          </Chip>
          <Chip active={filter === "Data Initiatives"} onClick={() => setFilter("Data Initiatives")}>
            Data Initiatives
          </Chip>
        </div>

        {/* Cards */}
        <div className="mt-8 space-y-6 sm:space-y-8">
          {filtered.map((p) => (
            <ProjectCard key={p.id} project={p} />
          ))}
        </div>
      </div>
    </div>
  );
}