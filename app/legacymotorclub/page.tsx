export const metadata = {
  title: "Legacy Motor Club",
  description: "Learn more about how I can help drive digital innovation as part of The Club.",
};

import Link from "next/link";
import { Globe, Puzzle, Smartphone } from "lucide-react";

export default function NewPage() {
  return (
    <>
      {/* Headline  */}
      <section className="w-full bg-white py-8 pt-24 md:pt-36 scroll-mt-24">
        <div className="container mx-auto max-w-6xl px-4">
          <h1 className="text-3xl font-bold text-[#0c1426] sm:text-4xl">
            DRIVING DIGITAL INNOVATION FOR LEGACY MOTOR CLUB
          </h1>
          <p className="mt-8 max-w-6xl text-zinc-700">
            I bring a builder&#39;s mindset and a fan&#39;s passion to digital platforms, combining hands-on experience 
            in website and app development with a deep understanding of what drives engagement, loyalty, and sponsor 
            value in modern motorsports. My goal is to help Legacy Motor Club create digital experiences that are 
            fast, connected, and unforgettable for fans and sponsors alike.
          </p>
        </div>
      </section>

      {/* Quick Section Links (NEW) */}
      <section aria-label="Quick section links" className="w-full bg-white py-6 border-t border-neutral-400 pt-6">
        <div className="container mx-auto max-w-6xl px-4">
          <ul className="grid grid-cols-1 gap-3 sm:grid-cols-3">
            <li>
              <Link
                href="#section-one"
                className="block rounded border-0 px-6 py-3 text-center text-sm font-semibold uppercase tracking-wider bg-black text-[#b09e6a] transition-colors hover:bg-[#b09e6a] hover:text-black"
              >
                What I Bring to the Table
              </Link>
            </li>
            <li>
              <Link
                href="#section-two"
                className="block rounded border-0 px-6 py-3 text-center text-sm font-semibold uppercase tracking-wider bg-black text-[#b09e6a] transition-colors hover:bg-[#b09e6a] hover:text-black"
              >
                What I&#39;ve Done
              </Link>
            </li>
            <li>
              <Link
                href="#section-three"
                className="block rounded border-0 px-6 py-3 text-center text-sm font-semibold uppercase tracking-wider bg-black text-[#b09e6a] transition-colors hover:bg-[#b09e6a] hover:text-black"
              >
                What I Could Improve
              </Link>
            </li>
          </ul>
        </div>
      </section>

      {/* Section One (card/grid like Services) */}
      <section id="section-one" className="w-full bg-[#b09e6a] py-15 scroll-mt-12">
        <div className="container mx-auto max-w-6xl px-4">
          <h2 className="text-center text-2xl font-bold uppercase tracking-widest text-black sm:text-3xl">
            What I Bring to the Table
          </h2>

          <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {/* Card 1 */}
            <div className="rounded-lg bg-black p-8 text-center transition-transform hover:-translate-y-2">
              <h3 className="mb-3 text-xl font-bold text-white">Proven Track Record</h3>
              <p className="text-left text-zinc-300">
                I&#39;ve spearheaded projects that have exponentially grown app users and website traffic.
              </p>
            </div>

            {/* Card 2 */}
            <div className="rounded-lg bg-black p-8 text-center transition-transform hover:-translate-y-2">
              <h3 className="mb-3 text-xl font-bold text-white">Digital Experience</h3>
              <p className="text-left text-zinc-300">
                I&#39;ve led the day-to-day operation and maintenance of websites for multiple large manufacturers.
              </p>
            </div>

            {/* Card 3 */}
            <div className="rounded-lg bg-black p-8 text-center transition-transform hover:-translate-y-2">
              <h3 className="mb-3 text-xl font-bold text-white">Future Driven</h3>
              <p className="text-left text-zinc-300">
                I look past what others are doing now and seek to leverage new technologies in innovative ways.
              </p>
            </div>

            {/* Card 4 */}
            <div className="rounded-lg bg-black p-8 text-center transition-transform hover:-translate-y-2">
              <h3 className="mb-3 text-xl font-bold text-white">Fan&#39;s Perspective</h3>
              <p className="text-left text-zinc-300">
                I&#39;ve been a NASCAR fan for 20+ years and know how to reach and engage with other fans.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section Two (content-focused)  */}
      <section id="section-two" className="w-full bg-white py-12 scroll-mt-15">
        <div className="container mx-auto max-w-6xl px-4">
          <h2 className="text-center text-2xl font-bold uppercase tracking-widest text-black sm:text-3xl">
            What I&#39;ve Done
          </h2>
          <div className="grid grid-cols-1 gap-24 lg:grid-cols-2 py-6">
            <div>
              <p className="mt-4 text-zinc-700">
                I am an experienced digital platforms leader with a strong background in website management, mobile app 
                engagement, and digital platform development for fast-moving brands.
              </p>
              <p className="mt-4 text-zinc-700">
                I&#39;ve successfully led cross-functional collaboration, QA testing, and vendor management to deliver 
                seamless, data-informed fan and customer experiences.
              </p>
              <p className="mt-4 text-zinc-700">
                I am skilled in building and maintaining CMS platforms, integrating analytics, and driving measurable 
                growth across complex digital ecosystems.
              </p>
            </div>

            <div className="rounded-lg bg-[#d9d9d9] p-6 ring-1 ring-[#d9d9d9]">
              <h3 className="text-xl font-semibold text-black text-center">Experience at a Glance</h3>
              <dl className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="rounded-md bg-[white] p-4 ring-2 ring-[#b09e6a]">
                  <dt className="text-md text-zinc-500 text-center">Years Managing Websites</dt>
                  <dd className="mt-1 text-3xl font-bold text-black text-center">6+</dd>
                </div>
                <div className="rounded-md bg-white p-4 ring-2 ring-[#b09e6a]">
                  <dt className="text-md text-zinc-500 text-center">Pages Developed</dt>
                  <dd className="mt-1 text-3xl font-bold text-black text-center">10,000+</dd>
                </div>
                <div className="rounded-md bg-white p-4 ring-2 ring-[#b09e6a]">
                  <dt className="text-md text-zinc-500 text-center">Avg. Traffic Increase</dt>
                  <dd className="mt-4 text-3xl font-bold text-black text-center">+25%</dd>
                </div>
                <div className="rounded-md bg-white p-4 ring-2 ring-[#b09e6a]">
                  <dt className="text-md text-zinc-500 text-center">Platforms</dt>
                  <dd className="mt-1 text-lg font-bold text-black text-center">Wordpress, Shopify, Sitecore, Optimizely</dd>
                </div>
              </dl>
            </div>
          </div>
        </div>

        {/* Website Management */}
        <div className="container mx-auto max-w-6xl px-4 py-8">
          <div className="flex items-start gap-4">
            <Globe className="h-8 w-8 shrink-0 text-[#b09e6a] mt-1" aria-hidden="true" />
            <div>
              <p className="text-xl font-bold text-zinc-900">Website Management</p>
              <p className="mt-2 text-zinc-700">
                At Ingersoll Rand and Solve Industrial Motion Group, I oversaw the development and day-to-day performance 
                of the company&#39;s digital platforms, ensuring the website remained fast, organized, and seamlessly 
                integrated with the tools that powered marketing and customer engagement.
              </p>
              <ul className="mt-6 px-9 space-y-3 text-zinc-700">
                <li className="flex items-start gap-4">
                  <span aria-hidden="true" className="text-[#b09e6a]">●</span>
                  Managed ongoing website performance and stability through regular CMS and plugin updates, Core Web 
                  Vitals optimization, and error monitoring to maintain peak load speed, mobile responsiveness, and 
                  uptime reliability
                </li>
                <li className="flex items-start gap-4">
                  <span aria-hidden="true" className="text-[#b09e6a]">●</span>
                  Created intuitive, user-focused navigation and taxonomy plans for manufacturer websites, enhancing 
                  site structure to ensure product detail pages were within three clicks of the homepage and improving 
                  discoverability across over thousands of SKUs
                </li>
                <li className="flex items-start gap-4">
                  <span aria-hidden="true" className="text-[#b09e6a]">●</span>
                  Performed user access management tasks as well as deployed and maintained plugins, themes, and integrations that enhanced website functionality, including GA4, Google Tag Manager, and email/marketing automation tools
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Feature Management */}
        <div className="container mx-auto max-w-6xl px-4 py-8">
          <div className="flex items-start gap-4">
            <Puzzle className="h-8 w-8 shrink-0 text-[#b09e6a] mt-1" aria-hidden="true" />
            <div>
              <p className="text-xl font-bold text-zinc-900">Feature Development</p>
              <p className="mt-2 text-zinc-700">
                At Ingersoll Rand and Solve Industrial Motion Group, I helped plan and build new website features, 
                working from early strategy through final testing to make sure every update improved performance, 
                usability, and overall customer experience.
              </p>
              <ul className="mt-6 px-9 space-y-3 text-zinc-700">
                <li className="flex items-start gap-4">
                  <span aria-hidden="true" className="text-[#b09e6a]">●</span>
                  Developed strategic roadmaps for website feature evolution, aligning long-term enhancements with 
                  business goals, customer engagement, and emerging technologies to ensure scalability, maintainability, 
                  and performance.
                </li>
                <li className="flex items-start gap-4">
                  <span aria-hidden="true" className="text-[#b09e6a]">●</span>
                  Scoped and defined requirements for new features and integrations, translating stakeholder input into 
                  actionable specifications and wireframes while coordinating with internal teams and external vendors 
                  to deliver on-time, technically sound releases.
                </li>
                <li className="flex items-start gap-4">
                  <span aria-hidden="true" className="text-[#b09e6a]">●</span>
                  Led QA and cross-environment testing for new features and platform updates, validating functionality 
                  and responsiveness while identifying and resolving issues before deployment to maintain a stable, 
                  high-performing user experience.
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* App Management */}
        <div className="container mx-auto max-w-6xl px-4 py-8">
          <div className="flex items-start gap-4">
            <Smartphone className="h-8 w-8 shrink-0 text-[#b09e6a] mt-1" aria-hidden="true" />
            <div>
              <p className="text-xl font-bold text-zinc-900">Mobile App Management</p>
              <p className="mt-2 text-zinc-700">
                At Passport Labs, I helped shape the growth of the Passport Parking app by blending design, branding, 
                and hands-on collaboration with developers to create user-friendly, locally resonant mobile experiences.
              </p>
              <ul className="mt-6 px-9 space-y-3 text-zinc-700">
                <li className="flex items-start gap-4">
                  <span aria-hidden="true" className="text-[#b09e6a]">●</span>
                  Led UI/UX design for the Passport Parking app, incorporating user feedback to develop features that 
                  provided a seamless experience when paying for parking by app.
                </li>
                <li className="flex items-start gap-4">
                  <span aria-hidden="true" className="text-[#b09e6a]">●</span>
                  Created unique brands for private label mobile applications for parking that resonated with 
                  residents, including ParkSLC, ParkWhitePlains, and ParkVictoria.
                </li>
                <li className="flex items-start gap-4">
                  <span aria-hidden="true" className="text-[#b09e6a]">●</span>
                  Collaborated closely with developers to rigorously test new app updates to ensure a smooth user 
                  experience and promptly address any issues before release.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Section Three  */}
      <section id="section-three" className="w-full bg-black py-12 pt-12 scroll-mt-15">
        <div className="container mx-auto max-w-6xl px-4">
          <h2 className="text-center text-2xl font-bold uppercase tracking-widest text-white sm:text-3xl">
            What I Could Improve
          </h2>
          <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-2">
            {/* Card 1 */}
            <div className="rounded-lg bg-[#b09e6a] p-8 text-center transition-transform hover:-translate-y-2">
              <h3 className="mb-3 text-xl font-bold text-black">Create a Digital Hub</h3>
              <p className="text-left text-zinc-900">
                Transform the Legacy Motor Club website into a dynamic, data-driven digital hub that personalizes 
                content and uses interactive storytelling to both engage fans and better showcase and educate them 
                about the team&#39;s sponsors.
              </p>
            </div>

            {/* Card 2 */}
            <div className="rounded-lg bg-[#b09e6a] p-8 text-center transition-transform hover:-translate-y-2">
              <h3 className="mb-3 text-xl font-bold text-black">Better Integrate Digital Touchpoints</h3>
              <p className="text-left text-zinc-900">
                Improve integration among the team&#39;s website, e-commerce store, and social media channels to create 
                a seamless fan journey where content, community engagement, and merchandise come together in a single, 
                connected experience.
              </p>
            </div>

            {/* Card 3 */}
            <div className="rounded-lg bg-[#b09e6a] p-8 text-center transition-transform hover:-translate-y-2">
              <h3 className="mb-3 text-xl font-bold text-black">Foster a Seamless Digital Experience</h3>
              <p className="text-left text-zinc-900">
                Create a digital fan rewards program that connects the team&#39;s website, e-commerce store, and social 
                media channels to incentivize engagement, rewarding fans for actions like following, sharing, and 
                purchasing to build loyalty and deepen their connection to the team.
              </p>
            </div>

            {/* Card 4 */}
            <div className="rounded-lg bg-[#b09e6a] p-8 text-center transition-transform hover:-translate-y-2">
              <h3 className="mb-3 text-xl font-bold text-black">Develop Marketing Analytics & Tracking</h3>
              <p className="text-left text-zinc-900">
                Improve marketing analytics and build integrated dashboards to enable real-time KPI tracking, 
                performance benchmarking, and actionable insights that guide fan engagement and sponsor activation 
                strategies.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA  */}
      <section className="w-full bg-white py-12 pt-12 scroll-mt-24">
        <div className="container mx-auto max-w-6xl px-4">
          <h2 className="text-center text-2xl font-bold uppercase tracking-widest text-zinc-900 sm:text-3xl">
            Learn More
          </h2>
        </div>
        {/* Optional CTA row */}
        <div className="mt-12 flex items-center justify-center gap-4">
          <a
            href="/projects"
            className="rounded border-2 border-[#b09e6a] bg-[#b09e6a] px-6 py-2 font-semibold text-black transition-colors hover:bg-black hover:border-black hover:text-[#b09e6a]"
          >
            View Projects
          </a>
          <a
            href="/#contact"
            className="rounded border-2 border-[#b09e6a] bg-[#b09e6a] px-6 py-2 font-semibold text-black transition-colors hover:bg-black hover:border-black hover:text-[#b09e6a]"
          >
            Contact Me
          </a>
        </div>
      </section>
    </>
  );
}
