import type { Metadata } from "next";
import { League_Spartan, Lato } from "next/font/google";
import "./globals.css";
import Header from "./components/Header"; // Import the new Header component

// Import fonts
const montserrat = League_Spartan({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  variable: "--font-display",
});

const lato = Lato({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-sans",
});

// Metadata is now correctly in a Server Component
export const metadata: Metadata = {
  title: "Tom Walsh | Experience E-Commerce & Digital Marketing Leader in Charlotte, NC",
  description: "I collaborate with businesses to craft exceptional websites, design compelling marketing materials, produce corporate and promotional videos, and execute digital marketing campaigns to effectively reach their intended audience.",
};

// Main Footer Component
function Footer() {
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${montserrat.variable} ${lato.variable} font-sans`}>
      <body>
        <Header /> {/* Use the imported Header component */}
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}