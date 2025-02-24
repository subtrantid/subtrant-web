import React from "react";
import { SiDiscord, SiGithub } from "@icons-pack/react-simple-icons";
import Image from "next/image";

interface GithubUser {
  login: string;
  avatar_url: string;
  html_url: string;
}

async function GetGithubUser(username: string): Promise<GithubUser> {
  const response = await fetch(`https://api.github.com/users/${username}`);
  return await response.json();
}

function Profile({ user, role }: { user: GithubUser; role: string }) {
  return (
    <div className="flex flex-col items-center p-4">
      <div className="rounded-full overflow-hidden w-20 h-20 sm:w-24 sm:h-24 mb-3">
        <Image
          src={user.avatar_url}
          alt={`${user.login}'s avatar`}
          width={96}
          height={96}
          className="rounded-full"
        />
      </div>
      <h2 className="text-center">
        <a href={user.html_url} className="hover:underline">
          {user.login}
        </a>
      </h2>
      <p className="text-sm text-gray-600">{role}</p>
    </div>
  );
}

function SocialLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      className="p-2"
      target="_blank"
      rel="noopener noreferrer"
      aria-label={typeof children === "string" ? children : ""}
    >
      {children}
    </a>
  );
}

export default async function RootPage() {
  const [mochraiyanData, refliqxData, amaerawantoinetteData] =
    await Promise.all([
      GetGithubUser("mochraiyan"),
      GetGithubUser("refliqx"),
      GetGithubUser("amaerawantoinette"),
    ]);

  return (
    <main className="min-h-screen w-full px-4 py-8 flex flex-col items-center justify-center space-y-6">
      <h1 className="font-bold text-2xl sm:text-4xl text-center">
        Welcome to subtrant!
      </h1>

      <p className="text-center text-gray-500 text-sm sm:text-base w-6/12">
        We're community of people who loves technology, we are software
        developers, tech geeks, or just people who are passionate in IT
        industry.
      </p>

      <section className="flex gap-4 justify-center">
        <SocialLink href="https://discord.gg/?">
          <SiDiscord color="white" />
        </SocialLink>
        <SocialLink href="https://github.com/subtrantid">
          <SiGithub color="white" />
        </SocialLink>
      </section>

      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12 w-full max-w-5xl px-4">
        <Profile user={amaerawantoinetteData} role="Designer" />
        <Profile user={mochraiyanData} role="Founder" />
        <Profile user={refliqxData} role="Developer" />
      </section>
    </main>
  );
}
