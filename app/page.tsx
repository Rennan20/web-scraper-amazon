import { WindowIcon } from "@heroicons/react/24/outline";

function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center">
      <WindowIcon className="h-64 w-64 text-[#FFB40F] opacity-20" />
      <h1 className="text-center text-3xl mt-2 text-black font-bold mb-5">
        Welcome to Amazon Web Scraper
      </h1>

      <h2 className="text-center text-lg italic text-black ">
        This project and many more are in my GitHub
      </h2>

      <a
        href="https://github.com/Rennan20"
        target="_blank"
        className="text-center text-lg italic text-[#FFB40F] "
      >
        (https://github.com/Rennan20)
      </a>
      <h3 className="text-center text-lg italic text-black">
        Massive thanks to Sonny Sangha!
      </h3>
    </div>
  );
}

export default HomePage;
