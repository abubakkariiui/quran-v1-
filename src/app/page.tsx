import { FiMic, FiSearch } from "react-icons/fi";
import { PiPlayFill } from "react-icons/pi";

const QuranChapter = ({ name }: { name: string }) => (
  <p className="text-center cursor-pointer text-sm text-white">{name}</p>
);

const Home = () => {
  const quranChapters = [
    "About The Quran",
    "Al Mulk",
    "Yaseen",
    "Al Kahf",
    "Al Waqi'ah",
  ];

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
        <div className="flex items-center cursor-pointer mt-3 w-6/12 px-5 rounded-full bg-white shadow-md">
          <FiSearch size={20} />
          <input
            type="text"
            placeholder="What do you want to read?"
            className="w-full rounded-l-full py-5 px-2 text-gray-700 leading-tight focus:outline-none"
          />
          <div className="flex items-center">
            <div className="border border-gray-200 flex justify-center">
              <div className="px-1 py-1 text-gray-700">ctrl</div>
              <div className="px-2 py-1 text-gray-700">K</div>
            </div>
            <div className="ml-2">
              <FiMic color="#2ca4ab" size={20} />
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-2 gap-4">
        {quranChapters.map((chapter, index) => (
          <QuranChapter key={index} name={chapter} />
        ))}
      </div>
    </div>
  );
};

export default Home;
