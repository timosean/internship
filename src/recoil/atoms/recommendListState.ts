import { atom } from "recoil";

interface RecommendItem {
  shop_id: string | null;
  keyword: string;
  thumb_image: string | null;
}

interface RecommendList {
  shops: RecommendItem[];
  hashtags: RecommendItem[];
}

const defaultValue = {
  shops: Array<RecommendItem>(),
  hashtags: Array<RecommendItem>(),
};

export const recommendListState = atom<RecommendList>({
  key: "RecommendListState",
  default: defaultValue,
});
