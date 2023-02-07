import { GrClose } from "react-icons/gr";

const RecentKeywordTag = ({ content }: { content: string }) => {
  return (
    <div className="float-left w-fit px-[8px] py-[5px] mr-[13px] mb-[8px] flex items-center justify-center gap-x-[10px] rounded-[2px] border-[0.6px] border-NAILGRAY">
      <span className="text-NAILGRAY text-[11px] leading-[13px] tracking-[-0.02em]">
        {content}
      </span>
      <GrClose size={10.16} id="tag-close" />
    </div>
  );
};

export default RecentKeywordTag;
