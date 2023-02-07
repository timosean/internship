import { useSetRecoilState } from "recoil";
import { recentKeywordState } from "@/recoil/atoms/recentKeywordState";
import { GrClose } from "react-icons/gr";

const RecentKeywordTag = ({ content }: { content: string }) => {
  const setRecentKeyword = useSetRecoilState(recentKeywordState);

  const RemoveTag = (content: string) => {
    if (typeof window !== "undefined") {
      const recentKeywords = localStorage.getItem("recent-keywords");

      if (recentKeywords) {
        const JSONKeywords = JSON.parse(recentKeywords);
        delete JSONKeywords[content];
        localStorage.setItem("recent-keywords", JSON.stringify(JSONKeywords));

        setRecentKeyword((prev) => {
          const temp = prev.concat([]);
          const removeIdx = temp.indexOf(content);
          temp.splice(removeIdx, 1);
          return temp;
        });
      }
    }
  };

  return (
    <div className="float-left w-fit px-[8px] py-[5px] mr-[13px] mb-[8px] flex items-center justify-center gap-x-[10px] rounded-[2px] border-[0.6px] border-NAILGRAY">
      <span className="text-NAILGRAY text-[11px] leading-[13px] tracking-[-0.02em]">
        {content}
      </span>
      <GrClose size={10.16} id="tag-close" onClick={() => RemoveTag(content)} />
    </div>
  );
};

export default RecentKeywordTag;
