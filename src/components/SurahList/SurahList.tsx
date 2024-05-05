"use client";

import React, { useEffect, useState } from "react";

interface Chapter {
  id: number;
  name_simple: string;
  name_arabic: string;
  verses_count: number;
  translated_name: {
    name: string;
  };
}

const SurahList: React.FC = () => {
  const [chapters, setChapters] = useState<Chapter[]>([]);

  useEffect(() => {
    fetch("https://api.quran.com/api/v4/chapters")
      .then((response) => response.json())
      .then(({ chapters }) => {
        setChapters(chapters);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div className="container mx-auto px-4 py-12 max-w-7xl">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {chapters.map((chapter) => (
          <div
            key={chapter.id}
            className="bg-white rounded-lg shadow-md p-4 flex justify-between transform transition duration-300 hover:scale-105 hover:bg-teal-200"
          >
            <div className="flex items-center">
              <div className="bg-teal-400 h-10 w-10 flex items-center justify-center transform rotate-45">
                <span className="text-white font-semibold block transform -rotate-45">
                  {chapter.id}
                </span>
              </div>
              <div className="ml-4 text-left">
                <p className="text-base font-medium">{chapter.name_simple}</p>
                <p className="text-xs">{chapter.translated_name.name}</p>
              </div>
            </div>
            <div className="text-center">
              <p className="text-md">{chapter.name_arabic}</p>
              <p className="text-xs">{chapter.verses_count} Ayahs</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SurahList;
