import { RxHamburgerMenu } from "react-icons/rx";
import { BiSearchAlt2 } from "react-icons/bi";
import { GrPrevious } from "react-icons/gr";
import { IoIosCloseCircle } from "react-icons/io";
import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import { searchingState } from "@/recoil/atoms/searchingState";
import { searchInputState } from "@/recoil/atoms/searchInputState";
import { recommendListState } from "@/recoil/atoms/recommendListState";
import { useEffect, useState } from "react";
import axiosInstance from "@/utils/axiosInstance";

// 엔터 눌렀을 때 검색해주는 함수
const Search = (keyword: string) => {
  if (typeof window !== "undefined") {
    const keywords = localStorage.getItem("recent-keywords");
    // 유효 기간 설정
    const date = new Date();
    date.setSeconds(date.getSeconds() + 600);

    if (keywords) {
      const keywords_JSON = JSON.parse(keywords);
      keywords_JSON[keyword] = new String(date);
      localStorage.setItem("recent-keywords", JSON.stringify(keywords_JSON));
    } else {
      localStorage.setItem(
        "recent-keywords",
        JSON.stringify({ keyword: new String(date) })
      );
    }
  }
};

const Header = () => {
  const [isSearching, setIsSearching] = useRecoilState(searchingState);
  const [keyword, setKeyword] = useRecoilState(searchInputState);
  const [recommendList, setRecommendList] = useRecoilState(recommendListState);
  const router = useRouter();

  const useDebounce = (value: string, delay: number) => {
    const [debouncedValue, setDebouncedValue] = useState(value);

    useEffect(() => {
      const timer = setTimeout(() => {
        setDebouncedValue(value);
      }, delay);

      return () => {
        clearTimeout(timer);
      };
    }, [value, delay]);

    return debouncedValue;
  };

  const debouncedQuery = useDebounce(keyword, 500);

  useEffect(() => {
    async function fetchRecommend() {
      const res = await axiosInstance.get(`?input=${debouncedQuery}`);
      setRecommendList(res.data);
    }

    if (debouncedQuery) fetchRecommend();
  }, [debouncedQuery]);

  return (
    <header
      className={`flex py-[6px] px-[16px] relative ${
        isSearching ? "justify-around" : "justify-between"
      } items-center h-[50px]`}
    >
      <RxHamburgerMenu
        size={18}
        className={`${isSearching ? "hidden" : "block"}`}
      />
      <GrPrevious
        size={18}
        className={`${isSearching ? "block" : "hidden"}`}
        onClick={() => {
          router.back();
        }}
      />
      <input
        placeholder="네일 키워드와 네일샵을 검색해보세요."
        value={keyword}
        className={`text-sm placeholder-NAILGRAY bg-INPUT_BG w-[279px] rounded-[10px] px-[10px] h-[38px] focus:outline-none ${
          isSearching ? "block" : "hidden"
        }`}
        onChange={(e) => {
          setKeyword(e.target.value);
        }}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            Search(keyword);
            router.push(`/searchResult/${keyword}`);
          }
        }}
        onClick={() => router.push("/search")}
      />
      <IoIosCloseCircle
        className={`absolute right-[70px] ${
          keyword !== "" && isSearching ? "block" : "hidden"
        }`}
        size={20}
        fill={"#969293"}
        onClick={() => {
          setKeyword("");
          router.push("/search");
        }}
      />
      <BiSearchAlt2
        size={18}
        onClick={() => {
          setIsSearching(true);
          setKeyword("");
          router.push("/search");
        }}
      />
    </header>
  );
};

export default Header;
