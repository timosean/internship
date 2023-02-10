import { FaHashtag } from "react-icons/fa";
import Image from "next/image";
import { useRecoilState } from "recoil";
import { searchInputState } from "@/recoil/atoms/searchInputState";

interface RecommendItem {
  type: string;
  name: string;
  imgsrc: string | null;
}

const MarkedText = ({ text }: { text: string }) => {
  return <span className="text-NAILPINK font-bold">{text}</span>;
};

const getHighlight = (name: string, find: string) => {
  const splitResult = name.split(find);
  console.log(splitResult);

  return splitResult.map((word, idx) => {
    return word === "" ? <MarkedText text={find} /> : <span>{word}</span>;
  });
};

const removeHashtag = (word: string) => {
  if (word.includes("#")) return word.slice(1);
  else return word;
};

const Recommend = ({ type, name, imgsrc }: RecommendItem) => {
  const [searchInput, setSearchInput] = useRecoilState(searchInputState);

  return (
    <div className="w-full h-[51px] py-[8px] flex justify-between">
      <div
        className={`flex items-center ${
          type === "shops" ? "space-x-[10px]" : "space-x-[12px]"
        }`}
      >
        {type === "shops" ? (
          <div className="w-[35px] h-[35px] rounded-full">
            <img
              src={String(imgsrc)}
              className="w-[35px] h-[35px] rounded-full"
              alt={name}
            />
          </div>
        ) : (
          <FaHashtag size={20} className="text-NAILGRAY" />
        )}
        <span className="ml-[10px] font-bold">
          {getHighlight(removeHashtag(name), searchInput)}
        </span>
      </div>
      <div className="text-sm text-NAILGRAY flex items-center">
        {type === "shops" ? "네일샵" : "해시태그"}
      </div>
    </div>
  );
};

export default Recommend;
