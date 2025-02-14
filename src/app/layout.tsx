import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const fontJetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Subtrant",
  description: "Group of people who loves technology",
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
              href="/blog"
              className="px-3 py-2 hover:text-blue-600 transition-colors"
            >
              _blog
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
        className={`${fontJetbrainsMono.className} antialiased bg-black text-white p-10`}
      >
        <Nav />
        {children}
      </body>
    </html>
  );
}
