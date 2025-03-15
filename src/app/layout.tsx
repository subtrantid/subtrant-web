import type { Metadata, Viewport } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import Image from "next/image";

const fontPoppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Subtrant | Tech Group",
  description:
    "Join Subtrant, a passionate group of tech enthusiasts exploring innovation, coding, and latest & greatest tech.",
  robots: "index, follow",
  authors: [{ name: "Subtrant Team" }],
  keywords:
    "tech community, software development, coding, tech enthusiasts, innovation, technology trends, developers",
  openGraph: {
    title: "Subtrant | Tech Enthusiasts & Developers Community",
    description: "Community",
    url: "https://subtrant.icu",
    siteName: "Subtrant",
    type: "website",
    locale: "en_US",
  },
};

function Nav() {
  return (
    <nav className="sticky top-0 z-10 w-full backdrop-blur-sm bg-black/80 border-b border-gray-800 px-4 py-3">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <a
          href="/"
          rel="noopener noreferrer"
          className="flex items-center space-x-2"
        >
          <Image src="/logo.png" width={50} height={50} alt="Subtrant logo" />
        </a>

        <ul className="flex items-center space-x-1 sm:space-x-4 text-sm sm:text-base font-semibold">
          <li>
            <Link
              href="/"
              className="px-3 py-2 hover:text-blue-500 transition-colors"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/projects"
              className="px-3 py-2 hover:text-blue-500 transition-colors"
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className="px-3 py-2 hover:text-blue-500 transition-colors"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className="px-3 py-2 hover:text-blue-500 transition-colors"
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

function Footer() {
  return (
    <footer className="w-full border-t border-gray-800 mt-auto py-6 px-4">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="text-sm text-gray-500">
          © {new Date().getFullYear()} Subtrant. All rights reserved.
        </div>
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
    <html lang="en">
      <body
        className={`${fontPoppins.className} antialiased bg-black text-white min-h-screen flex flex-col`}
      >
        <Nav />
        <main className="flex-grow px-4 py-6">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
