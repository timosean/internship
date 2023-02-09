import { FaHashtag } from "react-icons/fa";
import Image from "next/image";

interface RecommendItem {
  type: string;
  name: string;
  imgsrc: string | null;
}

const MarkedText = ({ text: string }) => {
  return <span className="text-NAILPINK font-bold">text</span>;
};

const matchedText = (text: string, keyword: string) => {
  //키워드가 빈 값이 아니거나, text가 키워드를 포함하고 있다면(조건)
  if (keyword !== "" && text.includes(keyword)) {
    //키워드를 기준으로 text를 쪼갠다.
    const parts = text.split(new RegExp(`(${keyword})`, "gi"));

    return (
      <>
        // 문자열이 담긴 배열을 map 돌림
        {parts.map((part, index) =>
          //소문자로 변환 후 비교하여 일치하면 MarkedText 스타일 적용
          part.toLowerCase() === keyword.toLowerCase() ? (
            <MarkedText key={index} text={part} />
          ) : (
            //일치하지않으면 그대로 출력
            part
          )
        )}
      </>
    );
  }

  return text;
};

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
        <span className="ml-[10px] font-bold">{removeHashtag(name)}</span>
      </div>
      <div className="text-sm text-NAILGRAY flex items-center">
        {type === "shops" ? "네일샵" : "해시태그"}
      </div>
    </div>
  );
};

export default Recommend;
