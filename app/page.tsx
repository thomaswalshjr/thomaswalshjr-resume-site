export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center">
      <div className="text-center space-y-4">
        <h1 className="text-4xl md:text-6xl font-bold">Hello, Tailwind v4 👋</h1>
        <p className="text-lg text-gray-600">
          If this text is styled, Tailwind is working.
        </p>
        <a
          href="#"
          className="inline-block px-5 py-3 rounded-xl bg-black text-white hover:opacity-90"
        >
          Primary CTA
        </a>
      </div>
    </main>
  );
}