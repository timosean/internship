import type { NextPage } from "next";
import RecentKeywordTag from "@/components/RecentKeywordTag";
import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { recentKeywordState } from "@/recoil/atoms/recentKeywordState";
import { searchingState } from "@/recoil/atoms/searchingState";
import { searchInputState } from "@/recoil/atoms/searchInputState";
import Recommend from "@/components/Recommend";
import {
  RecommendItem,
  RecommendList,
  recommendListState,
} from "@/recoil/atoms/recommendListState";

function RecommendContainer({ list }: { list: RecommendList }) {
  return (
    <>
      {list.shops
        .map((s: any) => (
          <Recommend type="shops" name={s.keyword} imgsrc={s.thumb_image} />
        ))
        .slice(0, 3)}
      {list.hashtags
        .map((h: any) => (
          <Recommend type="hashtags" name={h.keyword} imgsrc={h.thumb_image} />
        ))
        .slice(0, 3)}
    </>
  );
}

const RecentKeywordTagContainer = ({ keywords }: { keywords: string[] }) => {
  return (
    <div className="mt-[10px] w-full">
      {keywords.map((keyword) => (
        <RecentKeywordTag content={keyword} key={keyword} />
      ))}
    </div>
  );
};

const NoKeywordNotice = () => {
  return (
    <div className="mt-[10px] w-full h-[110px] flex justify-center items-center">
      최근 검색한 키워드가 없습니다!
    </div>
  );
};

const SearchPage: NextPage = () => {
  const [keywords, setKeywords] = useRecoilState(recentKeywordState);
  const [isSarching, setIsSearching] = useRecoilState(searchingState);
  const [searchInput, setSearchInput] = useRecoilState(searchInputState);
  const [recommendList, setRecommendList] = useRecoilState(recommendListState);

  useEffect(() => {
    setIsSearching(true);
    setSearchInput("");
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const recentKeywords = localStorage.getItem("recent-keywords");
      if (
        recentKeywords &&
        JSON.stringify(keywords) !== JSON.stringify(recentKeywords)
      ) {
        const JSONKeywords = JSON.parse(recentKeywords);
        setKeywords([]);
        for (const key in JSONKeywords) {
          const now = new Date();
          if (new Date(JSONKeywords[key]) >= now)
            setKeywords((prev) => prev.concat(key));
        }
        setKeywords((prev) => {
          const temp = Array.from(prev);
          return temp.reverse().slice(0, 30);
        });
      }
    }
  }, []);

  return (
    <div className="mt-6">
      <h1 className="font-bold text-base">최근 검색어</h1>
      {/* {keywords.length ? (
        <RecentKeywordTagContainer keywords={keywords} />
      ) : (
        <NoKeywordNotice />
      )} */}
      {searchInput ? (
        <RecommendContainer list={recommendList} />
      ) : keywords.length ? (
        <RecentKeywordTagContainer keywords={keywords} />
      ) : (
        <NoKeywordNotice />
      )}
    </div>
  );
};

export default SearchPage;
