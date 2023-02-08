import { FiHeart } from "react-icons/fi";
import Image from "next/image";

interface NailShopCardInfo {
  name: string;
  imgsrc: string;
  loc: string;
}

const NailShopCard = ({ name, imgsrc, loc }: NailShopCardInfo) => {
  return (
    <div className="w-[163.5px] flex flex-col">
      <Image
        src={imgsrc}
        alt={name}
        height={163.5}
        width={163.5}
        className="rounded-[4px]"
      />
      <div className="mt-[4px] w-full flex justify-between items-center">
        <div>
          <h1 className="font-bold">{name}</h1>
          <h2 className="text-NAILGRAY text-sm">{loc}</h2>
        </div>
        <FiHeart stroke={"NAILPINK"} />
      </div>
    </div>
  );
};

export default NailShopCard;
