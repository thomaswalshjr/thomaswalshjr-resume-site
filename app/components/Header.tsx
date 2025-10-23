"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const navItems = ["About", "Skillset"];
  const [open, setOpen] = useState(false);

  // Build hrefs that work on home (hash) and other pages (home + hash)
  const sectionHref = (id: string) => (isHome ? `#${id}` : `/#${id}`);

  // Close menu on route change
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Close on Esc
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <header className="fixed top-0 left-0 z-50 w-full bg-black p-6 backdrop-blur-md lg:px-12">
      <div className="mx-auto flex max-w-6xl items-center justify-between">
        {/* Logo / title */}
        <Link
          href="/"
          className="text-3xl text-white tracking-wide transition-colors hover:text-[#b09e6a]"
        >
          <span className="font-extrabold">TOM WALSH</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:block">
          <ul className="flex items-center gap-8">
            {navItems.map((item) => (
              <li key={item}>
                <Link
                  href={sectionHref(item.toLowerCase())}
                  className="text-sm font-semibold uppercase tracking-wider text-white transition-colors hover:text-[#b09e6a]"
                >
                  {item}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/projects"
                className="text-sm font-semibold uppercase tracking-wider text-white transition-colors hover:text-[#b09e6a]"
              >
                Projects
              </Link>
            </li>
          </ul>
        </nav>

        {/* Desktop CTA */}
        <Link
          href={sectionHref("contact")}
          className="hidden rounded border-2 border-[#b09e6a] px-5 py-2 text-sm font-bold uppercase tracking-wider text-white transition-colors hover:bg-[#b09e6a] hover:border-[#b09e6a] hover:text-black sm:inline-block md:inline-block"
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
          className="ml-3 inline-flex items-center justify-center rounded-md p-2 text-zinc-200 hover:text-white focus:outline-none focus:ring-2 focus:ring-teal-300 md:hidden"
        >
          {/* Hamburger / Close icons */}
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
          className={`fixed left-0 right-0 z-50 top-[72px] origin-top transform bg-gray-900/95 px-6 pb-6 pt-4 backdrop-blur transition-all ${
            open ? "scale-y-100 opacity-100" : "scale-y-95 opacity-0"
          }`}
        >
          <nav>
            <ul className="flex flex-col gap-4">
              {navItems.map((item) => (
                <li key={`m-${item}`}>
                  <Link
                    href={sectionHref(item.toLowerCase())}
                    onClick={() => setOpen(false)}
                    className="block rounded px-2 py-2 text-base font-semibold uppercase tracking-wider text-white hover:text-teal-300"
                  >
                    {item}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/projects"
                  onClick={() => setOpen(false)}
                  className="block rounded px-2 py-2 text-base font-semibold uppercase tracking-wider text-white hover:text-teal-300"
                >
                  Projects
                </Link>
              </li>
            </ul>
          </nav>

          {/* Mobile CTA */}
          <div className="mt-4">
            <Link
              href={sectionHref("contact")}
              onClick={() => setOpen(false)}
              className="block w-full rounded border-2 border-teal-300 px-4 py-2 text-center text-sm font-bold uppercase tracking-wider text-white transition-colors hover:bg-teal-300 hover:border-teal-300 hover:text-gray-900"
            >
              Contact Me
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
