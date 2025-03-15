import React from "react";
import { Code, Star, GitFork } from "lucide-react";
import Link from "next/link";

interface Repository {
  id: number;
  name: string;
  description: string;
  html_url: string;
  stargazers_count: number;
  forks_count: number;
  language: string;
}

async function getRepositories(): Promise<Repository[]> {
  try {
    const orgResponse = await fetch("https://api.github.com/orgs/subtrantid", {
      next: { revalidate: 3600 }
    });
    
    if (!orgResponse.ok) {
      console.error("GitHub organization not found or API error:", await orgResponse.text());
      return [];
    }
    
    const repoResponse = await fetch("https://api.github.com/orgs/subtrantid/repos", {
      headers: {
        "Accept": "application/vnd.github.v3+json"
      },
      next: { revalidate: 3600 }
    });
    
    if (!repoResponse.ok) {
      console.error("Failed to fetch repositories:", await repoResponse.text());
      return []; 
    }
    
    return repoResponse.json();
  } catch (error) {
    console.error("Error fetching repositories:", error);
    return []; 
  }
}

export default async function ProjectsPage() {
  let repositories = await getRepositories();

  return (
    <div className="flex flex-col items-center justify-center space-y-8 max-w-5xl mx-auto">
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6">
        {repositories.length === 0 ? (
          <p className="text-red-400">
No repositories found, this could happend probably because github rate limiting, try again later.</p>
        ) : (
          repositories.map((repo) => (
            <div 
              key={repo.id}
              className="bg-gray-900 rounded-xl border border-gray-800 p-6 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20 hover:border-blue-500 transform hover:-translate-y-1"
            >
              <div className="flex justify-between items-start mb-3">
                <h2 className="font-semibold text-xl text-blue-500">
                  <Link href={repo.html_url} target="_blank" rel="noopener noreferrer">
                    {repo.name}
                  </Link>
                </h2>
                {repo.language && (
                  <span className="text-xs bg-gray-800 px-2 py-1 rounded-full">
                    {repo.language}
                  </span>
                )}
              </div>
              
              <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                {repo.description || "No description provided"}
              </p>
              
              <div className="flex items-center space-x-4 text-sm text-gray-500">
                <div className="flex items-center">
                  <Star size={16} className="mr-1" />
                  <span>{repo.stargazers_count}</span>
                </div>
                <div className="flex items-center">
                  <GitFork size={16} className="mr-1" />
                  <span>{repo.forks_count}</span>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}