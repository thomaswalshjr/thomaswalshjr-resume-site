import Image from 'next/image';
import { MonitorSmartphone, ServerCog, Blocks, Rocket, Zap, AppWindow, Linkedin } from 'lucide-react';


const SectionTitle = ({ children }: { children: React.ReactNode }) => (
  <h2 className="text-center font-display text-3xl font-bold uppercase tracking-widest md:text-4xl">
    {children}
  </h2>
);

const HeroSection = () => (
  <section
    id="home"
    className="relative flex min-h-screen flex-col items-center justify-center px-4 pb-12 pt-24 text-center bg-cover bg-center"
    style={{ backgroundImage: "url('/charlotte-nc-credit-daniel-weiss.jpg')" }}
  >
    {/* Overlay */}
    <div className="absolute inset-0 bg-slate-900/65" />

    {/* Content */}
    <div className="relative z-10">
      <h1 className="mb-6 max-w-4xl font-headline text-5xl font-black leading-tight md:text-6xl text-white text-left">
        Powering Growth Through Data&#8209;Driven Digital Strategies
      </h1>
      <div className="flex flex-col gap-4 sm:flex-row justify-left">
        <a href="#about" className="rounded bg-blue-500 px-8 py-3 font-bold uppercase text-slate-100 transition-colors hover:bg-blue-700 hover:text-white">How I Work</a>
        <a href="#projects" className="rounded bg-blue-200 px-8 py-3 font-bold uppercase text-blue-950 transition-colors hover:bg-blue-400 hover:border-blue-300 hover:text-blue-950">What I've Done</a>
      </div>
    </div>
  </section>
);

// About Section
const AboutSection = () => (
  <section id="about" className="w-full bg-slate-100 py-24 scroll-mt-12">
    <div className="mb-12">
        <SectionTitle>
          <span className="text-blue-950">How I Help Businesses</span>
        </SectionTitle>
      </div>
    <div className="container mx-auto px-6 max-w-6xl">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        
        {/* LEFT COLUMN: The "Profile" & "Quick Scan" (Sticky on Desktop) */}
        <div className="lg:col-span-4 lg:sticky lg:top-24 flex flex-col gap-8">
          
          {/* 1. Header & Photo Group */}
          <div className="text-center lg:text-left">
            <div className="relative inline-block mb-6">
              <Image
                src="/tom-walsh.jpg"
                alt="Tom Walsh headshot"
                width={800}
                height={800}
                priority
                className="w-48 h-48 lg:w-56 lg:h-56 rounded-full border-4 border-white shadow-xl object-cover mx-auto lg:mx-0"
              />
            </div>

            <h3 className="font-display text-4xl font-light text-blue-950 mb-2">
              Hi, I'm <span className="font-bold text-blue-700">Tom Walsh</span>
            </h3>
            <p className="text-sm text-slate-600">
              I'm an experienced e-commerce and digital marketing leader with a proven track record of driving growth for B2B and DTC brands through data-driven strategies and customer-centric solutions.
            </p>
          </div>

          {/* 2. The "Quick Scan" Card (Redesigned) */}
          <div className="bg-blue-100 rounded-xl p-6 shadow-sm border border-slate-200">
            <div className="mb-4 flex items-center gap-2 border-b border-slate-50 pb-3">
              <span className="bg-blue-700 text-slate-100 text-xs font-bold px-2 py-1 rounded uppercase tracking-wide">
                At a Glance
              </span>
            </div>
            
            <ul className="flex flex-col gap-3">
              {[
                "10+ Years Digital & E-com Experience",
                "Led Digital Transformations for $100MM+ Businesses",
                "Data-Driven B2B & DTC Growth",
                "SEO & Content Strategy Expert",
                "DXP & CMS Platform Specialist",
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3 text-sm text-slate-700 leading-snug">
                  {/* Custom Gold Checkmark SVG */}
                  <svg className="w-5 h-5 text-sky-500 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* RIGHT COLUMN: The Narrative (Problem -> Solution -> Result) */}
        <div className="lg:col-span-8 space-y-12">
          
          {/* Block 1: The Problem */}
          <div className="relative pl-0 lg:pl-8 border-l-0 lg:border-l-2 border-slate-200">
            <h4 className="text-xl font-bold text-blue-700 mb-3">
              The Friction in Digital Experience
            </h4>
            <p className="text-lg text-slate-600 leading-relaxed">
              I am typically engaged when a manufacturer's website no longer meets customer purchasing needs. Buyers expect accurate, self-service access to products, pricing, availability, and reordering, but disconnected systems and outdated processes limit the digital experience. Pricing, inventory, and order data are often spread across multiple tools, causing discrepancies between what the site displays and what operations can deliver. Incomplete or inconsistent product data makes it difficult for customers to find, compare, and trust information. This friction increases manual work for internal teams and creates a digital channel that demands effort without consistently driving growth. 
            </p>
          </div>

          {/* Block 2: The Approach */}
          <div className="relative pl-0 lg:pl-8 border-l-0 lg:border-l-2 border-slate-200">
             <h4 className="text-xl font-bold text-blue-700 mb-3">
              A Fact-Based Approach
            </h4>
            <p className="text-lg text-slate-600 leading-relaxed">
              I begin with a comprehensive assessment of the business, examining customer behavior, data flows, and the technology stack to ensure decisions are based on facts. I work closely with customers and frontline teams to identify friction points, then turn these insights into a practical plan tailored to the company's systems, constraints, and capacity. This approach produces a roadmap that teams can implement, not just approve.
            </p>
          </div>

          {/* Block 3: The Result */}
          <div className="relative pl-0 lg:pl-8 border-l-0 lg:border-l-2 border-slate-200">
             <h4 className="text-xl font-bold text-blue-700 mb-3">
              Streamlined Operations & Growth
            </h4>
            <p className="text-lg text-slate-600 leading-relaxed">
              When I bring these plans to life, operations become streamlined rather than complex. Core data is organized, reliable, and accessible to the systems and teams that rely on it, reducing manual work and exceptions. Customers can research, configure, price, and reorder with confidence, building trust in the channel and easing the load on sales and support. Over time, this clarity and customer autonomy drive measurable revenue growth, making the digital experience a consistent source of new and repeat business.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

// Strategic Domains Section
const SkillsetSection = () => {
  const skillset = [
    {
      title: "B2B Digital Commerce and Marketplace Strategy",
      desc: "I lead the design and evolution of B2B commerce platforms that support real buying behavior, not just catalog browsing. At Solve Industrial Motion Group, I owned the strategy and rollout of a new B2B marketplace, aligning executive priorities, IT constraints, and revenue goals into a phased roadmap. The result was a scalable platform that supported multiple brands, enabled self-service purchasing, and became a meaningful driver of marketplace revenue.",
      icon: MonitorSmartphone,
    },
    {
      title: "Product Data, PIM, and Platform Integration",
      desc: "I specialize in strengthening the data foundations that enable digital growth. I have led PIM implementations that consolidated tens of thousands of SKUs, defined data schemas, and established governance supporting SEO, marketplace readiness, and operational accuracy. By treating product data as a shared enterprise asset instead of a marketing artifact, I helped teams reduce friction across commerce, content, and downstream systems.",
      icon: ServerCog,
    },
    {
      title: "Translating Strategy into Executable Roadmaps",
      desc: "I am often trusted to translate high-level business goals into actionable plans. This includes setting product roadmaps, defining prioritization frameworks, and sequencing work across marketing, technology, and operations. In post-acquisition environments, I have aligned multiple brands around shared platforms, standards, and operating models while respecting brand-level needs and capacity.",
      icon: Blocks,
    },
    {
      title: "Growth Through Customer Centric Optimization",
      desc: "I drive growth by aligning content, merchandising, and platform decisions with how customers search, evaluate, and buy. In manufacturing, retail, and SaaS roles, I have built SEO and performance programs that increased organic traffic by forty to fifty percent and improved conversion without paid media. I focus on measurable outcomes, repeatable processes, and sustainable gains rather than short-term tactics.",
      icon: Rocket, //
    },
  ];

  return (
    <section
      id="skillset"
      className="w-full bg-blue-950 py-24 scroll-mt-12"
    >
      <div className="container mx-auto px-4">
        {/* Section title */}
        <SectionTitle>
          <span className="text-slate-200">Strategic Domains</span>
        </SectionTitle>

        {/* Skillset cards */}
        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-2">
          {skillset.map((skillset) => (
            <div
              key={skillset.title}
              className="rounded-lg bg-blue-900 border-1 border-sky-300 p-8 text-left transition-transform hover:-translate-y-2"
            >
              {/* Icon */}
              <div className="mb-6 flex justify-center text-sky-200">
                 <skillset.icon className="h-16 w-16" strokeWidth={1.5} /> 
              </div>

              {/* Title */}
              <h3 className="mb-2 font-display text-xl font-bold text-white">
                {skillset.title}
              </h3>

              {/* Description */}
              <p className="text-slate-300 text-left">{skillset.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Contact Section Component
const ContactSection = () => (
  <section id="contact" className="w-full bg-white py-24 scroll-mt-24">
    <div className="container mx-auto px-6 max-w-4xl">
      
      {/* Section Header */}
      <div className="mb-12 text-center">
        <div className="mb-8">
          <SectionTitle>
            <span className="text-blue-950">Let's Talk</span>
          </SectionTitle>
        </div>
        <p className="text-lg text-slate-600">
          Whether you have a specific project in mind or just want to connect.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
        
        {/* LinkedIn Container */}
          <div className="flex flex-col items-center justify-center rounded-2xl border border-blue-100 bg-blue-900/15 p-8 text-center shadow-sm transition-all hover:shadow-md hover:border-slate-300">
           <h3 className="mb-3 text-xl font-bold text-blue-700">Looking for a digital marketing leader?</h3>
              <p className="mb-8 text-sm text-slate-800">
                If you need a full-time expert to align strategy, systems, and execution, connect with me on LinkedIn to discuss how I can help drive results.
              </p>
           <a
            href="https://www.linkedin.com/in/thomaswalshjr/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-[#0077b5] px-6 py-3 font-bold text-white transition-colors hover:bg-[#006396]"
          >
            <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
            </svg>
            Connect on LinkedIn
        </a>
      </div>

        {/* Email/Agency Container */}
          <div className="flex flex-col items-center justify-center rounded-2xl border border-sky-100 bg-blue-900/10 p-8 text-center shadow-sm transition-all hover:shadow-md hover:border-slate-300">
           <h3 className="mb-3 text-xl font-bold text-blue-700">Prefer flexible support over a <br /> full-time hire?</h3>
              <p className="mb-8 text-sm text-slate-800">
                I offer expert digital marketing and e-commerce expertise on a project or advisory basis. Learn more about how my agency, PTG, can accelerate growth.
              </p>
           <a
            href="https://www.ptgworks.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-blue-500 px-6 py-3 font-bold text-white transition-colors hover:bg-blue-700"
          >
            <AppWindow size={20} />
            Visit PTGworks.com
        </a>
      </div>

      </div>
    </div>
  </section>
);

// Main Page Component
export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <SkillsetSection />
      <ContactSection />
    </>
  );
}
