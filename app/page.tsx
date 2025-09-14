import Image from 'next/image';

// Helper component for section titles
const SectionTitle = ({ children }: { children: React.ReactNode }) => (
  <h2 className="text-center font-display text-3xl font-bold uppercase tracking-widest md:text-4xl">
    {children}
  </h2>
);

// Hero Section Component
const HeroSection = () => (
  <section
    id="home"
    className="relative flex min-h-screen flex-col items-center justify-center px-4 pb-12 pt-24 text-center bg-cover bg-center"
    style={{ backgroundImage: "url('/charlotte-nc-credit-daniel-weiss.jpg')" }}
  >
    {/* Overlay */}
    <div className="absolute inset-0 bg-black/65" />

    {/* Content */}
    <div className="relative z-10">
      <h1 className="mb-6 max-w-4xl font-display text-4xl font-black leading-tight md:text-6xl text-white text-left">
        Powering Growth Through Data&#8209;Driven Digital Strategies
      </h1>
      <div className="flex flex-col gap-4 sm:flex-row justify-left">
        <a href="#services" className="rounded bg-[#1dd1a1] px-8 py-3 font-bold text-[#0c1426] transition-colors hover:bg-rose-400 hover:border-rose-400 hover:text-white">My Services</a>
        <a href="#projects" className="rounded border-2 border-[#1dd1a1] px-8 py-3 font-bold text-white transition-colors hover:bg-rose-400 hover:border-rose-400 hover:text-white">My Projects</a>
      </div>
    </div>
  </section>
);

// About Section Component
const AboutSection = () => (
    <section id="about" className="w-full bg-white py-24 scroll-mt-24">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
                <h3 className="font-display text-4xl font-light">Hi, I am <span className="font-bold">Tom Walsh</span></h3>
                <p className="mb-6 text-lg font-bold text-rose-400">E-COMMERCE & DIGITAL MARKETING LEADER</p>
                <p className="mb-4 text-gray-900">I collaborate with businesses to craft exceptional websites, design compelling marketing materials, produce corporate and promotional videos, and execute digital marketing campaigns to effectively reach their intended audience.</p>
                <p className="text-gray-900">My contributions have played a key role in advancing the growth of numerous well-established companies in Dubai.</p>
            </div>
            <div className="rounded-lg bg-gray-900 p-8">
                <ul className="flex flex-col gap-3 text-gray-200">
                    {[
                        'Licensed Freelancer', 'Designed 140+ Websites', '100+ Clients Including Government Entities',
                        'DM Consultant for 7 Companies', "Ranked among Dubai's top 10 in 2021"
                    ].map(item => (
                        <li key={item} className="border-b border-[#1dd1a1] pb-3">✓ {item}</li>
                    ))}
                </ul>
            </div>
        </div>
      </div>
    </section>
);

// Services Section Component
const ServicesSection = () => {
  const services = [
    {
      title: "Delivering Outsized ROI on Digital Initiatives",
      desc: "I consistently optimize digital marketing spend and channel performance to generate exceptional returns and sustainable profit growth.",
      icon: "/icons/website.png",
    },
    {
      title: "Integrating Technology to Boost Performance",
      desc: "I'm adept at modernizing tech stacks and integrating systems to create a more agile, data-driven, and high-performing digital enterprise.",
      icon: "/icons/integration.png",
    },
    {
      title: "Using Data to Forge Stronger Connections",
      desc: "I use advanced analytics to understand customer behavior, tailor experiences to individual needs, and foster brand loyalty that creates lasting value.",
      icon: "/icons/customer-data.png",
    },
    {
      title: "Culitivating Innovation & Collaboration",
      desc: "I approach challenges with curiosity and teamwork, guiding teams through change to consistently achieve their objectives.",
      icon: "/icons/innovation.png", //
    },
  ];

  return (
    <section
      id="services"
      className="w-full bg-slate-300 py-24 scroll-mt-12"
    >
      <div className="container mx-auto px-4">
        {/* Section title */}
        <SectionTitle>
          <span className="text-gray-900">My Skillset</span>
        </SectionTitle>

        {/* Service cards */}
        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <div
              key={service.title}
              className="rounded-lg bg-[#0c1426] p-8 text-center transition-transform hover:-translate-y-2"
            >
              {/* Icon */}
              <div className="mb-6 flex justify-center">
                <Image
                  src={service.icon}
                  alt={`${service.title} icon`}
                  width={64}
                  height={64}
                  className="h-16 w-16"
                />
              </div>

              {/* Title */}
              <h3 className="mb-4 font-display text-xl font-bold text-white">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-slate-200 text-left">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Contact Section Component
const ContactSection = () => (
    <section id="contact" className="w-full bg-white py-24 scroll-mt-6">
      <div className="container mx-auto px-4">
        <SectionTitle>Get In Touch</SectionTitle>
        <p className="mb-12 text-center text-gray-900">FILL IN THE DETAILS AND I WILL GET BACK TO YOU SOON</p>
        <div className="mx-auto max-w-3xl rounded-lg bg-gray-900 p-8 sm:p-12">
            <form className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <input type="text" placeholder="Name" className="w-full rounded-md border border-slate-300 bg-slate-200 p-4 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-rose-500" />
                <input type="email" placeholder="Email" className="w-full rounded-md border border-slate-300 bg-slate-200 p-4 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-rose-500" />
                <input type="text" placeholder="Phone" className="w-full rounded-md border border-slate-300 bg-slate-200 p-4 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-rose-500" />
                <input type="text" placeholder="Subject" className="w-full rounded-md border border-slate-300 bg-slate-200 p-4 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-rose-500" />
                <textarea placeholder="Message" rows={5} className="w-full rounded-md border border-slate-300 bg-slate-200 p-4 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-rose-500 sm:col-span-2"></textarea>
                <button type="submit" className="w-full rounded bg-[#1dd1a1] px-8 py-3 font-bold text-gray-900 transition-colors hover:bg-gray-900 hover:text-[#1dd1a1] sm:col-span-2 sm:mx-auto sm:w-auto">SEND MESSAGE</button>
            </form>
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
      <ServicesSection />
      <ContactSection />
    </>
  );
}
