"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();
  const navItems = ['About', 'Services'];

  return (
    <header className="fixed top-0 left-0 z-50 flex w-full items-center justify-between bg-gray-900 p-6 backdrop-blur-md lg:px-12">
      <Link
        href="/"
        className="text-3xl text-white tracking-wide transition-colors hover:text-teal-400"
      >
        <span className="font-extrabold">TOM WALSH</span>
      </Link>
      <nav className="hidden md:block">
        <ul className="flex items-center gap-8">
          {navItems.map(item => {
            const href = pathname === '/' ? `#${item.toLowerCase()}` : `/#${item.toLowerCase()}`;
            
            return (
              <li key={item}>
                <a
                  href={href}
                  className="text-sm font-semibold uppercase tracking-wider text-zinc-300 transition-colors hover:text-rose-400"
                >
                  {item}
                </a>
              </li>
            );
          })}
          <li>
            <Link
              href="/projects"
              className="text-sm font-semibold uppercase tracking-wider text-zinc-300 transition-colors hover:text-rose-400"
            >
              Projects
            </Link>
          </li>
        </ul>
      </nav>
      <a href="#contact" className="hidden rounded border-2 border-[#1dd1a1] px-5 py-2 text-sm font-bold uppercase tracking-wider text-white transition-colors hover:bg-rose-400 hover:border-rose-400 sm:inline-block">
        Contact Me
      </a>
    </header>
  );
}
