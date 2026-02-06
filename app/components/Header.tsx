"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const navItems = [
  { label: "About Me", slug: "about" },
  { label: "Strategic Domains", slug: "skillset" }
    ];
  const [open, setOpen] = useState(false);

  const sectionHref = (id: string) => (isHome ? `#${id}` : `/#${id}`);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <header className="fixed top-0 left-0 z-50 w-full border-b-2 border-blue-500 bg-slate-100/80 p-6 backdrop-blur-md lg:px-12">
      <div className="mx-auto flex max-w-6xl items-center justify-between">
        <Link
          href="/"
          className="text-3xl text-slate-950 tracking-wide transition-colors hover:text-blue-700"
        >
          <span className="font-black tracking-tight text-blue-700">TOM WALSH</span>
        </Link>

        {/* Desktop nav */}
        <nav>
          <ul className="flex flex-row items-center divide-x divide-sky-400">
            {navItems.map((item) => (
             <li key={`d-${item.slug}`} className="px-8">
               <Link
                 href={sectionHref(item.slug)}
                 onClick={() => setOpen(false)}
                  className="block rounded py-2 text-sm font-semibold uppercase tracking-wider text-blue-950 hover:text-sky-400"
                >
                 {item.label}
                </Link>
             </li>
           ))}
            <li className="px-4">
             <Link
               href="/projects"
               onClick={() => setOpen(false)}
               className="block rounded py-2 text-sm font-semibold uppercase tracking-wider text-blue-950 hover:text-sky-400"
            >
            My Work
            </Link>
           </li>
       </ul>
      </nav>

        {/* Desktop CTA */}
        <Link
          href={sectionHref("contact")}
          className="hidden rounded bg-blue-500 px-5 py-2 text-sm font-bold uppercase tracking-wider text-white transition-colors hover:bg-blue-700 hover:text-white sm:inline-block md:inline-block"
        >
          Contact Me
        </Link>

        {/* Mobile hamburger */}
        <button
          type="button"
          aria-label="Toggle menu"
          aria-controls="mobile-menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="ml-3 inline-flex items-center justify-center rounded-md p-2 text-zinc-200 hover:text-white focus:outline-none focus:ring-2 focus:ring-sky-400 md:hidden"
        >
          {/* Hamburger icons */}
          <svg
            className={`h-6 w-6 ${open ? "hidden" : "block"}`}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M4 6h16M4 12h16M4 18h16" />
          </svg>
          <svg
            className={`h-6 w-6 ${open ? "block" : "hidden"}`}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      {/* Mobile overlay + panel */}
      <div
        className={`md:hidden ${open ? "pointer-events-auto" : "pointer-events-none"}`}
      >
        {/* Clickable dark overlay */}
        <div
          className={`fixed inset-0 z-40 transition-opacity ${
            open ? "bg-black/40 opacity-100" : "opacity-0"
          }`}
          onClick={() => setOpen(false)}
        />

        {/* Slide-down panel under header */}
        <div
          id="mobile-menu"
          className={`fixed left-0 right-0 z-50 top-[72px] origin-top transform bg-blue-950/95 px-6 pb-6 pt-4 backdrop-blur transition-all ${
            open ? "scale-y-100 opacity-100" : "scale-y-95 opacity-0"
          }`}
        >
          <nav>
            <ul className="flex flex-col gap-4">
              {navItems.map((item) => (
                <li key={`m-${item.slug}`}>
                  <Link
                    href={sectionHref(item.slug)}
                    onClick={() => setOpen(false)}
                    className="block rounded px-2 py-2 text-base font-semibold uppercase tracking-wider text-white hover:text-sky-400"
                  >
                    {item.label}
                  </Link>
             </li>
              ))}
              <li>
                <Link
                  href="/projects"
                  onClick={() => setOpen(false)}
                  className="block rounded px-2 py-2 text-base font-semibold uppercase tracking-wider text-white hover:text-sky-400"
                >
                  My Work
                </Link>
              </li>
            </ul>
          </nav>

          {/* Mobile CTA */}
          <div className="mt-4">
            <Link
              href={sectionHref("contact")}
              onClick={() => setOpen(false)}
              className="block w-full rounded border-2 border-blue-600 px-4 py-2 text-center text-sm font-bold uppercase tracking-wider text-white transition-colors hover:bg-sky-400 hover:border-sky-400 hover:text-white"
            >
              Contact Me
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
