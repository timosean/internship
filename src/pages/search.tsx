import type { NextPage } from "next";
import RecentKeywordTag from "@/components/RecentKeywordTag";
import { useEffect, useState } from "react";

const RecentKeywordTagContainer = ({ keywords }: { keywords: string[] }) => {
  return (
    <div className="mt-[10px] w-full">
      {keywords.map((keyword) => (
        <RecentKeywordTag content={keyword} />
      ))}
    </div>
  );
};

const NoKeywordNotice = () => {
  return (
    <div className="mt-[10px] w-full h-[110px] flex justify-center align-center">
      <p>최근 검색한 키워드가 없습니다!</p>
    </div>
  );
};

const SearchPage: NextPage = () => {
  const [keywords, setKeywords] = useState<string[]>([]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const recentKeywords = localStorage.getItem("recent-keywords");
      if (recentKeywords) {
        const JSONKeywords = JSON.parse(recentKeywords);
        for (const key in JSONKeywords) {
          setKeywords((prev) => prev.concat(key));
        }
      }
    }
  }, []);

  return (
    <div className="mt-6">
      <h1 className="font-bold text-base">최근 검색어</h1>
      {keywords ? (
        <RecentKeywordTagContainer keywords={keywords} />
      ) : (
        <NoKeywordNotice />
      )}
    </div>
  );
};

export default SearchPage;
