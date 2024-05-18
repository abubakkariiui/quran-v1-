"use client";
import {
  CiGlobe,
  CiSearch,
  CiUser,
  GiHamburgerMenu,
  IoMdSettings,
} from "@/utils/icons";
import Image from "next/image";
import { useState } from "react";
import Drawer from "react-modern-drawer";
import DrawerComponent from "../Drawer/DrawerComponent";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };

  const onClose = () => {
    setIsOpen((prevState) => !prevState);
  };
  return (
    <div>
      <div className="flex justify-between p-2 px-8">
        <div className="flex items-center text-2xl">
          <div className="hover:bg-gray-300 hover:rounded-full flex items-center justify-center w-10 h-10">
            <GiHamburgerMenu className="cursor-pointer" />
          </div>
          <Image src="quran-logo.svg" width={110} height={110} alt="quran" />
        </div>
        <div className="flex items-center justify-around gap-1 text-2xl cursor-pointer">
          <div className="hover:bg-gray-300 hover:rounded-full flex items-center justify-center w-10 h-10">
            <CiUser />
          </div>
          <div className="hover:bg-gray-300 hover:rounded-full flex items-center justify-center w-10 h-10">
            <CiGlobe />
          </div>
          <div className="hover:bg-gray-300 hover:rounded-full flex items-center justify-center w-10 h-10">
            <IoMdSettings />
          </div>
          <div className="hover:bg-gray-300 hover:rounded-full flex items-center justify-center w-10 h-10">
            <CiSearch onClick={toggleDrawer} />
          </div>
        </div>
      </div>
      <DrawerComponent
        isOpen={isOpen}
        toggleDrawer={toggleDrawer}
        onClose={onClose}
      />
    </div>
  );
};

export default Navbar;
