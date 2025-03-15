import React from "react";
import { SiDiscord, SiGithub } from "@icons-pack/react-simple-icons";
import { Code, BookOpen, Share2, Users } from "lucide-react";
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
    <div className="flex flex-col items-center p-6 bg-gray-900 rounded-xl border border-gray-800 hover:border-blue-500 transition-all duration-300 shadow-md hover:shadow-lg hover:shadow-blue-500/20 transform hover:-translate-y-1">
      <div className="rounded-full overflow-hidden w-20 h-20 sm:w-24 sm:h-24 mb-4 ring-2 ring-blue-500">
        <Image
          src={user.avatar_url}
          alt={`${user.login}'s avatar`}
          width={96}
          height={96}
          className="rounded-full"
        />
      </div>
      <h2 className="text-center font-bold text-lg">
        <a href={user.html_url} className="hover:text-blue-500 transition-colors">
          {user.login}
        </a>
      </h2>
      <p className="text-sm text-gray-400 mt-1">{role}</p>
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
      className="p-3 bg-gray-900 rounded-full hover:bg-gray-800 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20 transform hover:-translate-y-1"
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
    <div className="w-full flex flex-col items-center justify-center space-y-12">
      <section className="text-center max-w-3xl mx-auto">
        <h1 className="font-bold text-2xl sm:text-4xl mb-4">
          Welcome to Subtrant!
        </h1>

        <p className="text-gray-400 text-sm sm:text-base max-w-xl mx-auto mb-6">
          We're a community of people who love technology, software
          developers, tech geeks, and passionate IT enthusiasts.
        </p>

        <div className="flex gap-4 justify-center">
          <SocialLink href="https://discord.gg/?">
            <SiDiscord color="white" size={24} />
          </SocialLink>
          <SocialLink href="https://github.com/subtrantid">
            <SiGithub color="white" size={24} />
          </SocialLink>
        </div>
      </section>

      <section className="w-full max-w-5xl px-4">
        <div className="bg-gray-900 rounded-xl border border-gray-800 p-8 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20 hover:border-blue-500">
          <h2 className="font-bold text-xl sm:text-2xl mb-4 text-blue-500">What We Do</h2>
          <p className="text-gray-400 mb-6">
            At Subtrant, we focus on creating innovative technology solutions for educational institutions. 
            Our projects range from school management systems to interactive learning tools, all designed 
            to make technology more accessible in educational environments.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-4 bg-black/50 rounded-lg">
              <div className="flex items-center mb-3">
                <Code size={24} className="text-blue-500 mr-3" />
                <h3 className="font-semibold text-lg">Software Development</h3>
              </div>
              <p className="text-sm text-gray-400">Building custom applications and tools tailored for educational needs.</p>
            </div>
            <div className="p-4 bg-black/50 rounded-lg">
              <div className="flex items-center mb-3">
                <BookOpen size={24} className="text-blue-500 mr-3" />
                <h3 className="font-semibold text-lg">Tech Workshops</h3>
              </div>
              <p className="text-sm text-gray-400">Organizing hands-on sessions to share knowledge and skills with students.</p>
            </div>
            <div className="p-4 bg-black/50 rounded-lg">
              <div className="flex items-center mb-3">
                <Share2 size={24} className="text-blue-500 mr-3" />
                <h3 className="font-semibold text-lg">Open Source</h3>
              </div>
              <p className="text-sm text-gray-400">Contributing to and maintaining open-source projects that benefit the community.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full max-w-5xl px-4">
        <h2 className="font-bold text-xl sm:text-2xl text-center mb-8">Our Team</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12">
          <Profile user={amaerawantoinetteData} role="Designer" />
          <Profile user={mochraiyanData} role="Founder" />
          <Profile user={refliqxData} role="Developer" />
        </div>
      </section>

      <section className="w-full max-w-5xl px-4 mb-8">
        <div className="bg-gray-900 rounded-xl border border-gray-800 p-8 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20 hover:border-blue-500">
          <div className="flex items-center mb-4">
            <Users size={24} className="text-blue-500 mr-3" />
            <h2 className="font-bold text-xl sm:text-2xl text-blue-500">Join Our Community</h2>
          </div>
          <p className="text-gray-400 mb-6">
            Whether you're a seasoned developer or just starting your tech journey, there's a place for you in our community.
            Connect with like-minded individuals, collaborate on projects, and grow your skills with us.
          </p>
          
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="https://discord.gg/?" className="flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-medium transition-colors">
              <SiDiscord className="mr-2" size={20} />
              Join our Discord
            </a>
            <a href="https://github.com/subtrantid" className="flex items-center px-6 py-3 bg-gray-800 hover:bg-gray-700 rounded-lg font-medium transition-colors">
              <SiGithub className="mr-2" size={20} />
              Explore our GitHub
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
