"use client";

import React, { useState } from "react";
import Drawer from "react-modern-drawer";
import {
  AiOutlineSearch,
  AiOutlineArrowUp,
  AiOutlineClose,
} from "react-icons/ai";
import { FiMic } from "react-icons/fi";
import Image from "next/image";

interface DrawerProps {
  isOpen: boolean;
  toggleDrawer: () => void;
  onClose: () => void;
}

const DrawerComponent: React.FC<DrawerProps> = ({
  isOpen,
  toggleDrawer,
  onClose,
}) => {
  const [searchTerm, setSearchTerm] = useState("");

  const popularSearches = ["Al-Mulk", "Nuh", "Al-Kahf", "Ya-Sin"];
  const suggestions = ["Juz 1", "Page 1", "Ya-Sin", "36", "2:255"];

  return (
    <Drawer
      open={isOpen}
      onClose={toggleDrawer}
      direction="right"
      size={370}
      className="bg-white p-4"
    >
      <div className="relative">
        <AiOutlineSearch
          size={24}
          className="absolute left-1 top-1/2 transform -translate-y-1/2 text-gray-500"
        />
        <input
          type="text"
          placeholder="Search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="pl-10 pr-10 w-full border-gray-300 rounded-md py-2 focus:outline-none"
        />
        <div className="absolute hover:bg-gray-300 cursor-pointer hover:rounded-full right-10 top-1/2 transform -translate-y-1/2 text-gray-500 w-10 h-10 items-center flex justify-center">
          <FiMic color="#2ca4ab" size={20} />
        </div>
        <div className="absolute hover:bg-gray-300 cursor-pointer hover:rounded-full right-1 top-1/2 transform -translate-y-1/2 text-gray-500 w-10 h-10 items-center flex justify-center">
          <AiOutlineClose size={20} onClick={() => onClose()} />
        </div>
      </div>
      <div className="mt-4">
        <div className="flex items-center mb-2">
          <h2 className="text-lg font-semibold">Popular searches</h2>
        </div>
        {popularSearches.map((item, index) => (
          <div key={index} className="flex items-center ml-2 border-b w-full">
            <Image
              src="arrow-up.svg"
              className="mr-4 text-lg"
              alt="arrow-up"
              width={20}
              height={20}
            />
            {/* <AiOutlineArrowUp className="mr-2 text-lg" /> */}
            <div
              className="py-3 cursor-pointer"
              onClick={() => setSearchTerm(item)}
            >
              {item}
            </div>
          </div>
        ))}
      </div>
      <div className="mt-4">
        <div className="flex items-center mb-2">
          <h2 className="text-lg font-semibold">Try searching for</h2>
        </div>
        {suggestions.map((item, index) => (
          <div key={index} className="flex items-center ml-2 border-b w-full">
            <AiOutlineSearch className="mr-4 text-lg" />
            <div
              className="py-3 cursor-pointer"
              onClick={() => setSearchTerm(item)}
            >
              {item}
            </div>
          </div>
        ))}
      </div>
    </Drawer>
  );
};

export default DrawerComponent;
