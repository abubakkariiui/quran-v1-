"use client";

import { FiMic, FiSearch, PiPlayFill } from "@/utils/icons";
import { useRef, useState } from "react";
import Overlay from "./Overlay";

const QuranChapter = ({
  name,
  onClick,
}: {
  name: string;
  onClick: () => void;
}) => (
  <p
    className="text-center cursor-pointer text-sm text-white"
    onClick={onClick}
  >
    {name}
  </p>
);

const Search = () => {
  const [showOverlay, setShowOverlay] = useState(false);
  const searchInputRef = useRef<HTMLInputElement>(null);

  const quranChapters = [
    "About The Quran",
    "Al Mulk",
    "Yaseen",
    "Al Kahf",
    "Al Waqi'ah",
  ];

  const handleSearchClick = () => {
    setShowOverlay(true);
  };

  const handleCloseOverlay = () => {
    setShowOverlay(false);
  };

  return (
    <div className="asdf">
      <div className="flex justify-end mr-14">
        <div className="mt-5">
          <button className="flex items-center text-sm gap-2 text-white hover:bg-gray-500 hover:text-gray-100 py-1 px-3 rounded-md transition duration-300">
            <PiPlayFill />
            Play Radio
          </button>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="flex items-center cursor-pointer mt-3 px-5 md:w-6/12 rounded-full bg-white shadow-md">
          <FiSearch size={20} />
          <input
            type="text"
            onClick={handleSearchClick}
            ref={searchInputRef}
            placeholder="What do you want to read?"
            className="w-full md:w-auto rounded-l-full py-5 px-2 text-gray-700 leading-tight focus:outline-none"
          />
          <div className="flex items-center ml-auto">
            <div className="border border-gray-200 flex justify-center">
              <div className="px-1 py-1 text-gray-700">ctrl</div>
              <div className="px-2 py-1 text-gray-700">K</div>
            </div>
          </div>
          <div className="ml-2">
            <FiMic color="#2ca4ab" size={20} />
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-2 gap-4">
        {quranChapters.map((chapter, index) => (
          <QuranChapter
            key={index}
            name={chapter}
            onClick={handleSearchClick}
          />
        ))}
      </div>
      <Overlay showOverlay={showOverlay} onClose={handleCloseOverlay}>
        <div className="mb-4">
          <input
            type="text"
            autoFocus
            placeholder="Search a chapter..."
            className="w-full p-2 rounded"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
        <div>
          <ul className="space-y-12">
            {quranChapters.map((chapter, index) => (
              <li key={index} onClick={(e) => e.stopPropagation()}>
                {chapter}
              </li>
            ))}
          </ul>
        </div>
      </Overlay>
    </div>
  );
};

export default Search;
