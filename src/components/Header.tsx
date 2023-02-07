import { RxHamburgerMenu } from "react-icons/rx";
import { BiSearchAlt2 } from "react-icons/bi";
import { GrPrevious } from "react-icons/gr";
import { useState } from "react";
import { useRouter } from "next/router";

const Search = (keyword: string) => {
  if (typeof window !== "undefined") {
    const keywords = localStorage.getItem("recent-keywords");
    // 유효 기간 설정
    let date = new Date();
    date.setSeconds(date.getSeconds() + 600);

    if (keywords) {
      let date = new Date();
      const keywords_JSON = JSON.parse(keywords);
      keywords_JSON[keyword] = date;
      localStorage.setItem("recent-keywords", JSON.stringify(keywords_JSON));
    } else {
      localStorage.setItem(
        "recent-keywords",
        JSON.stringify({ keyword: date })
      );
    }

    console.log(localStorage.getItem("recent-keywords"));
  }
};

const Header = () => {
  const [isSearching, setIsSearching] = useState(false);
  const [keyword, setKeyword] = useState("");
  const router = useRouter();

  return (
    <header
      className={`flex py-[6px] px-[16px] ${
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
          setIsSearching(false);
          setKeyword("");
          router.back();
        }}
      />
      <input
        placeholder="네일 키워드와 네일샵을 검색해보세요."
        value={keyword}
        className={`text-sm placeholder-NAILGRAY bg-INPUT_BG w-[279px] rounded-[10px] px-[10px] h-[38px] focus:outline-none ${
          isSearching ? "block" : "hidden"
        }`}
        onChange={(e) => setKeyword(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            console.log(keyword);
            Search(keyword);
          }
        }}
      />
      <BiSearchAlt2
        size={18}
        onClick={() => {
          setIsSearching(true);
          router.push("/search");
        }}
      />
    </header>
  );
};

export default Header;
