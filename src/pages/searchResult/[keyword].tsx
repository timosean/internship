import { useRouter } from "next/router";
import axiosInstance from "@/utils/axiosInstance";
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { searchingState } from "@/recoil/atoms/searchingState";
import NailShopCard from "@/components/NailShopCard";
import { likedShopListState } from "@/recoil/atoms/likedShopListState";

interface ShopInfo {
  shop_id: string;
  location: string;
  name: string;
}

interface NailShop {
  shop: ShopInfo;
  is_new: boolean;
  categories: number[];
  nail_id: string;
  thumb_image: string;
}

const SearchResult = () => {
  const router = useRouter();
  const { keyword } = router.query;

  const [_, setIsSearching] = useRecoilState(searchingState);
  const [likedList, setLikedList] = useRecoilState(likedShopListState);
  const [results, setResult] = useState<NailShop[]>([]);

  useEffect(() => {
    setIsSearching(true);
  }, []);

  useEffect(() => {
    const getNailShopResult = async () => {
      const res = await axiosInstance.get(`nails?input=${keyword}`);
      setResult(res.data.data.nails);
    };

    getNailShopResult();
  }, []);

  return (
    <div className="w-full grid grid-cols-2">
      {results.map((elem, idx) => (
        <NailShopCard
          key={elem.shop.shop_id + idx}
          loc={elem.shop.location}
          name={elem.shop.name}
          imgsrc={elem.thumb_image}
          shop_id={elem.shop.shop_id}
          liked={likedList.includes(elem.shop.shop_id)}
        />
      ))}
    </div>
  );
};

export default SearchResult;
