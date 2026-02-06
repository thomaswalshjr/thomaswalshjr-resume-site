import type { Metadata } from "next";
import { Roboto, Montserrat } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Link from "next/link";

const roboto = Roboto({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-roboto",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: "Tom Walsh | Experience E-Commerce & Digital Marketing Leader in Charlotte, NC",
  description: "I collaborate with businesses to craft exceptional websites, design compelling marketing materials, produce corporate and promotional videos, and execute digital marketing campaigns to effectively reach their intended audience.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${roboto.variable} ${montserrat.variable} scroll-smooth`}
    >
      <body className="antialiased">
        <Header /> 
        
        {children}

        <Footer />
      </body>
    </html>
  );
}