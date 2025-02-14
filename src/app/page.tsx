import React from "react";
import { SiDiscord, SiGithub } from "@icons-pack/react-simple-icons";
import Image from "next/image";

export default async function RootPage() {
  const mochraiyanGithub = await fetch(
    "https://api.github.com/users/mochraiyan"
  );
  const refliqxGithub = await fetch("https://api.github.com/users/refliqx");

  const mochraiyanData = await mochraiyanGithub.json();
  const refliqxData = await refliqxGithub.json();

  return (
    <main className="min-h-screen w-full px-4 py-8 flex flex-col items-center justify-center space-y-6">
      <h1 className="font-bold text-2xl sm:text-4xl text-center">
        Welcome to subtrant!
      </h1>

      <p className="text-center max-w-prose text-sm sm:text-base">
        We're community of people who loves technology, we are community,
        software developers, tech geeks, or just people who are passionate in IT
        industry.
      </p>

      <section className="flex gap-4 justify-center">
        {/* Discord link not working now */}
        <a
          href="https://discord.gg/?"
          className="p-2"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Join our Discord"
        >
          <SiDiscord color="white" />
        </a>
        <a
          href="https://github.com/subtrantid"
          className="p-2"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="See our Github"
        >
          <SiGithub color="white" />
        </a>
      </section>

      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12 w-full max-w-5xl px-4">
        <div className="flex flex-col items-center p-4">
          <div className="rounded-full overflow-hidden w-20 h-20 sm:w-24 sm:h-24 mb-3">
            {/* Should be img, but what works for now. */}
            <div className="w-full h-full bg-slate-900" />
          </div>
          <h2 className="text-center">
            <a href="#" className="hover:underline">
              ???
            </a>
          </h2>
          <p className="text-sm text-gray-600">???</p>
        </div>
        <div className="flex flex-col items-center p-4">
          <div className="rounded-full overflow-hidden w-20 h-20 sm:w-24 sm:h-24 mb-3">
            <Image
              src={mochraiyanData.avatar_url}
              alt={`${mochraiyanData.login}'s avatar`}
              width={96}
              height={96}
              className="rounded-full"
            />
          </div>
          <h2 className="text-center">
            <a href={mochraiyanData.html_url} className="hover:underline">
              {mochraiyanData.login}
            </a>
          </h2>
          <p className="text-sm text-gray-600">Founder</p>
        </div>
        <div className="flex flex-col items-center p-4">
          <div className="rounded-full overflow-hidden w-20 h-20 sm:w-24 sm:h-24 mb-3">
            <Image
              src={refliqxData.avatar_url}
              alt={`${refliqxData.login}'s avatar`}
              width={96}
              height={96}
              className="rounded-full"
            />
          </div>
          <h2 className="text-center">
            <a href={refliqxData.html_url} className="hover:underline">
              {refliqxData.login}
            </a>
          </h2>
          <p className="text-sm text-gray-600">Developer</p>
        </div>
      </section>
    </main>
  );
}
