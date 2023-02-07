import { GrClose } from "react-icons/gr";

const RecentTag = ({ content }: { content: string }) => {
  return (
    <div className="w-fit px-[8px] py-[5px] flex items-center justify-center gap-x-[10px] rounded-[2px] border-[0.6px] border-NAILGRAY">
      <span className="text-NAILGRAY text-[11px] leading-[13px] tracking-[-0.02em]">
        {content}
      </span>
      <GrClose size={10.16} id="tag-close" />
    </div>
  );
};

export default RecentTag;
