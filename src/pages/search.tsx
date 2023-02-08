import type { NextPage } from "next";
import RecentKeywordTag from "@/components/RecentKeywordTag";
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { recentKeywordState } from "@/recoil/atoms/recentKeywordState";

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
          return temp.reverse();
        });
      }
    }
  }, []);

  return (
    <div className="mt-6">
      <h1 className="font-bold text-base">최근 검색어</h1>
      {keywords.length ? (
        <RecentKeywordTagContainer keywords={keywords} />
      ) : (
        <NoKeywordNotice />
      )}
    </div>
  );
};

export default SearchPage;
