import { RxHamburgerMenu } from "react-icons/rx";
import { BiSearchAlt2 } from "react-icons/bi";
import { GrPrevious } from "react-icons/gr";
import { useState } from "react";
import { useRouter } from "next/router";

const Header = () => {
  const [isSearching, setIsSearching] = useState(false);
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
          router.back();
        }}
      />
      <input
        placeholder="네일 키워드와 네일샵을 검색해보세요."
        className={`placeholder-NAILGRAY bg-INPUT_BG w-[279px] rounded-[10px] px-[10px] h-[38px] focus:outline-none ${
          isSearching ? "block" : "hidden"
        }`}
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
