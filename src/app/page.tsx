import Search from "@/components/Search/Search";
import SurahList from "@/components/SurahList/SurahList";

const Home = () => {
  return (
    <div>
      <Search />
      <div className="">
        <SurahList />
      </div>
    </div>
  );
};

export default Home;
