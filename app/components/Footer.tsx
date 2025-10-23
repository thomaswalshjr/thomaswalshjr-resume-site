import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-black py-10 text-center text-white">
            <div className="container mx-auto px-4">
                <div className="mb-4 flex flex-col items-center justify-center gap-4 md:flex-row md:gap-8">
                    <a href="mailto:thomaswalshjr@gmail.com" className="transition-colors hover:text-rose-500">thomaswalshjr@gmail.com</a>
                    <span className="hidden md:block">|</span>
                    <span>Charlotte, NC</span>
                    <span className="hidden md:block">|</span>
                    <a href="/legacymotorclub" className="text-[#b09e6a]">Legacy Motor Club</a>
                </div>
                <p className="text-sm text-neutral-500">
                    © {new Date().getFullYear()} Tom Walsh. All Rights Reserved.
                </p>
            </div>
        </footer>
    );
}