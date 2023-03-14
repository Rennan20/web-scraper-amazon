"use client";

import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import { useRouter } from "next/navigation";
import { FormEvent, useRef } from "react";
import toast from "react-hot-toast";

function Header() {
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  const handleSearch = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const input = inputRef.current?.value;
    if (!input) return;

    const notification = toast.loading(`Starting a Scraper for: ${input}`);

    if (input) {
      inputRef.current.value = "";
    }

    try {
      //Call our API to activate the Scraper...
      // /api/activateScraper
      const response = await fetch("/api/activateScraper", {
        method: "POST",
        headers: {
          "Contet-Type": "application/json",
        },
        body: JSON.stringify({ search: input }),
      });

      const { collection_id, start_eta } = await response.json();

      toast.success("Scraper started succsessfully!", {
        id: notification,
      });

      router.push(`/search/${collection_id}`);
    } catch (error) {
      toast.error("Whoops... Something went wrong!", {
        id: notification,
      });
    }

    //Wait for the response to come back
  };
  return (
    <header>
      <form
        onSubmit={handleSearch}
        className="flex items-center space-x-2 justify-center rounded-full py-2 px-4 bg-opacity-20 bg-[#8A2BE2] max-w-md mx-auto"
      >
        <input
          ref={inputRef}
          type="text"
          placeholder="Search..."
          className="flex-1 outline-none bg-transparent text-[#FFB40F] placeholder:text-[#FFB40F]"
        />
        <button hidden>Search</button>
        <MagnifyingGlassIcon className="h-6 w-6 text-[#FFB40F]" />
      </form>
    </header>
  );
}

export default Header;
