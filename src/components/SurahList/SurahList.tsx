"use client";

import React, { useEffect, useState } from "react";
import { Chapter } from "@/utils/types";
import { useQuery } from "@tanstack/react-query";

const SurahList: React.FC = () => {
  const {
    data: chapters = [],
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["chapters"],
    queryFn: () =>
      fetch("https://api.quran.com/api/v4/chapters")
        .then((response) => response.json())
        .then(({ chapters }) => chapters),
  });

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error fetching data</div>;

  return (
    <div className="container mx-auto px-4 py-12 max-w-7xl">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {chapters.map((chapter: Chapter) => (
          <div
            key={chapter.id}
            className="bg-white border cursor-pointer rounded-lg p-4 flex justify-between transform transition duration-200 hover:scale-105 hover:bg-teal-200"
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
