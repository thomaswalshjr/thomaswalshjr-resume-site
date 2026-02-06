import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-blue-950 py-10 text-center text-slate-100  border-t-2 border-blue-500">
            <div className="container mx-auto px-4">
                <div className="mb-4 flex flex-col items-center justify-center gap-4 md:flex-row md:gap-8">
                    <Link href="/#contact" className="font-bold transition-colors hover:text-sky-400">
                        Contact Me
                    </Link>
                    <span className="hidden md:block">|</span>
                    <span>Based in Charlotte, NC</span>
                </div>
                <p className="text-sm text-blue-300">
                    © {new Date().getFullYear()} Tom Walsh. All Rights Reserved.
                </p>
            </div>
        </footer>
    );
}