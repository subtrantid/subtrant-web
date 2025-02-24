import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import Image from "next/image";

const fontJetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Subtrant | Tech Group",
  description:
    "Join Subtrant, a passionate group of tech enthusiasts exploring innovation, coding, and latest & greatest tech.",
  robots: "index, follow",
  viewport: "width=device-width, initial-scale=1",
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
    <nav className="sticky top-0 w-full backdrop-blur-sm px-4 py-3">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <a
          href="https://github.com/subtrantid"
          rel="noopener noreferrer"
          className="flex items-center space-x-2"
        >
          <Image src="/logo.png" width={50} height={50} alt="Subtrant logo" />
          <span className="font-bold text-xl text-blue-600 hover:underline">
            Subtrant
          </span>
        </a>

        <ul className="flex items-center space-x-1 sm:space-x-4 text-sm sm:text-base font-semibold">
          <li>
            <Link
              href="/"
              className="px-3 py-2 hover:text-blue-600 transition-colors"
            >
              _home
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className="px-3 py-2 hover:text-blue-600 transition-colors"
            >
              _about
            </Link>
          </li>
        </ul>
      </div>
    </nav>
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
        className={`${fontJetbrainsMono.className} antialiased bg-black dark text-white p-10`}
      >
        <Nav />
        {children}
      </body>
    </html>
  );
}
