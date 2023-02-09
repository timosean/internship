import { FaHashtag } from "react-icons/fa";
import Image from "next/image";

interface RecommendItem {
  type: string;
  name: string;
  imgsrc: string | null;
}

const removeHashtag = (word: string) => {
  if (word.includes("#")) return word.slice(1);
  else return word;
};

const Recommend = ({ type, name, imgsrc }: RecommendItem) => {
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
        <span className="ml-[10px]">{removeHashtag(name)}</span>
      </div>
      <div className="text-sm text-NAILGRAY flex items-center">
        {type === "shops" ? "네일샵" : "해시태그"}
      </div>
    </div>
  );
};

export default Recommend;
