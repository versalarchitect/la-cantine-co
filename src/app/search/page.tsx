"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function SearchPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const router = useRouter();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`https://www.google.com/search?q=${encodeURIComponent(searchQuery)}`);
    }
  };

  const handleLucky = () => {
    window.location.href = "https://www.google.com/doodles";
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#202124] text-white px-4">
      <div className="w-full max-w-[584px] mx-auto flex flex-col items-center gap-6">
        {/* Google Logo */}
        <div className="mb-8">
          <Image
            src="/images/google-logo.svg"
            alt="Google Logo"
            width={272}
            height={92}
            priority
          />
        </div>

        {/* Search Form */}
        <form onSubmit={handleSearch} className="w-full">
          <div className="relative w-full">
            <Input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full h-12 px-12 rounded-full bg-transparent border border-gray-700 hover:border-gray-500 focus:border-gray-500 focus:ring-0 text-white"
              placeholder="Search Google or type a URL"
            />
            {/* Search icon */}
            <svg
              className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-labelledby="searchIconTitle"
              role="img"
            >
              <title id="searchIconTitle">Search Icon</title>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
            {/* Microphone icon */}
            <svg
              className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 cursor-pointer"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-labelledby="micIconTitle"
              role="img"
            >
              <title id="micIconTitle">Voice Search</title>
              <path d="M12 14c1.66 0 3-1.34 3-3V5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3z" />
              <path d="M17 11c0 2.76-2.24 5-5 5s-5-2.24-5-5H5c0 3.53 2.61 6.43 6 6.92V21h2v-3.08c3.39-.49 6-3.39 6-6.92h-2z" />
            </svg>
          </div>

          <div className="flex justify-center gap-2 mt-6">
            <Button
              type="submit"
              variant="secondary"
              className="bg-[#303134] hover:bg-[#3c4043] text-white border-none"
            >
              Google Search
            </Button>
            <Button
              type="button"
              variant="secondary"
              className="bg-[#303134] hover:bg-[#3c4043] text-white border-none"
              onClick={handleLucky}
            >
              I&apos;m Feeling Lucky
            </Button>
          </div>
        </form>

        <div className="text-sm text-gray-400 mt-6">
          Google offered in: <a href="https://www.google.pt" className="text-[#8ab4f8] hover:underline">Português (Portugal)</a>
        </div>
      </div>
    </div>
  );
} 
