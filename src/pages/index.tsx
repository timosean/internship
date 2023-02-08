import type { NextPage } from "next";
import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { searchingState } from "@/recoil/atoms/searchingState";
import { likedShopListState } from "@/recoil/atoms/likedShopListState";

const Home: NextPage = () => {
  const [isSearching, setIsSearching] = useRecoilState(searchingState);
  const [likedList, setLikedList] = useRecoilState(likedShopListState);

  useEffect(() => {
    setIsSearching(false);

    if (typeof window !== "undefined") {
      const likeListStorage = localStorage.getItem("shops-liked");
      if (likeListStorage) setLikedList(JSON.parse(likeListStorage));
    }
  }, []);

  return (
    <div className="mt-28">
      <p className="text-4xl font-bold"> Main Page </p>
    </div>
  );
};

export default Home;
