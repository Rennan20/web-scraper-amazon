"use client";

import { MagnifyingGlassCircleIcon } from "@heroicons/react/24/solid";
import { collection, orderBy, query } from "firebase/firestore";
import { useCollection } from "react-firebase-hooks/firestore";
import { db } from "../firebase";
import SidebarRow from "./SidebarRow";

function Sidebar() {
  const [snapshot, loading, error] = useCollection(
    query(collection(db, "searches"), orderBy("start_eta", "desc"))
  );
  return (
    <div className="p-2 md:p-10 py-6 overflow-y-auto border-b border-[#FFB40F] border-opacity-50">
      <div className="flex flex-col items-center justify-center mb-10">
        <MagnifyingGlassCircleIcon className="h-16 md:w-16 text-[#FFB40F] opacity-70" />
        <h1 className="hidden md:inline text-center text-3xl mt-2 font-bold mb-2">
          Web Scraper
        </h1>
        <h2 className="hidden md:inline text-center text-md italic">
          Web scraping like a digital treasure hunt!
        </h2>
        <ul className="flex flex-col gap-2 py-2 overflow-x-auto">
          {snapshot?.docs.map((doc) => (
            <SidebarRow key={doc.id} doc={doc} />
          ))}
          {/* SidebarRow */}
          {/* SidebarRow */}
          {/* SidebarRow */}
          {/* SidebarRow */}
          {/* SidebarRow */}
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
