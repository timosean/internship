import { useRouter } from "next/router";
import axiosInstance from "@/utils/axiosInstance";
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { searchingState } from "@/recoil/atoms/searchingState";

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
  thumb_images: string;
}

const SearchResult = () => {
  const router = useRouter();
  const { keyword } = router.query;

  const [_, setIsSearching] = useRecoilState(searchingState);
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

  return <div className="w-full">{JSON.stringify(results)}</div>;
};

export default SearchResult;
