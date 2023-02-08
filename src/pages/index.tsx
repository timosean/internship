import type { NextPage } from "next";
import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { searchingState } from "@/recoil/atoms/searchingState";

const Home: NextPage = () => {
  const [_, setIsSearching] = useRecoilState(searchingState);

  useEffect(() => {
    setIsSearching(false);
  }, []);

  return (
    <div className="mt-28">
      <p className="text-4xl font-bold"> Main Page </p>
    </div>
  );
};

export default Home;
