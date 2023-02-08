import { FiHeart } from "react-icons/fi";
import Image from "next/image";
import { useRecoilState } from "recoil";
import { likedShopListState } from "@/recoil/atoms/likedShopListState";
interface NailShopCardInfo {
  name: string;
  imgsrc: string;
  loc: string;
  shop_id: string;
  liked: boolean;
}

const NailShopCard = ({
  name,
  imgsrc,
  loc,
  shop_id,
  liked,
}: NailShopCardInfo) => {
  const [likedList, setLikedList] = useRecoilState(likedShopListState);

  const Like = (id: string) => {
    console.log(id, "를 like하였음.");
    if (typeof window !== "undefined") {
      const likeListStorage = localStorage.getItem("shops-liked");
      if (likeListStorage) {
        const likeList: string[] = JSON.parse(likeListStorage);
        // 이미 like한 shop은 좋아요 해제
        if (likeList.includes(id)) {
          const listWithoutId = Array.from(likeList);
          listWithoutId.splice(listWithoutId.indexOf(id), 1);
          setLikedList((prev) => listWithoutId);
          localStorage.setItem("shops-liked", JSON.stringify(listWithoutId));
        } else {
          localStorage.setItem(
            "shops-liked",
            JSON.stringify(likeList.concat(id))
          );
          setLikedList((prev) => prev.concat(id));
        }
      } else {
        localStorage.setItem("shops-liked", JSON.stringify([id]));
      }
    }
  };

  return (
    <div className="w-[163.5px] mt-[10px] flex flex-col">
      <Image
        src={imgsrc}
        alt={name}
        height={163.5}
        width={163.5}
        className="rounded-[4px]"
      />
      <div className="mt-[4px] w-full flex justify-between items-center">
        <div>
          <h1 className="font-bold text-[13px] leading-[15.73px]">{name}</h1>
          <h2 className="text-NAILGRAY text-[11px]">{loc}</h2>
        </div>
        <FiHeart
          size={22}
          fill={`${liked ? "#FB786B" : "transparent"}`}
          className={`text-NAILPINK hover:cursor-pointer`}
          onClick={() => Like(shop_id)}
        />
      </div>
    </div>
  );
};

export default NailShopCard;
