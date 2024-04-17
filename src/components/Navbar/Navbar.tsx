import {
  CiGlobe,
  CiSearch,
  CiUser,
  GiHamburgerMenu,
  IoMdSettings,
} from "@/utils/icons";

const Navbar = () => {
  return (
    <div>
      <div className="flex justify-between p-2 px-8">
        <div className="flex items-center text-2xl">
          <div className="hover:bg-gray-300 hover:rounded-full flex items-center justify-center w-10 h-10">
            <GiHamburgerMenu className="cursor-pointer" />
          </div>
          <p>Quran.com</p>
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
            <CiSearch />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
