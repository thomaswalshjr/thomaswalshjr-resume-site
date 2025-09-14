export default function Footer() {
  return (
    <footer className="mt-16 border-t">
      <div className="mx-auto max-w-6xl px-6 py-8 text-sm text-gray-500">
        © {new Date().getFullYear()} Tom Walsh — All rights reserved.
      </div>
    </footer>
  );
}
