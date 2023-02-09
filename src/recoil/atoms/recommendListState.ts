import { atom } from "recoil";

export interface RecommendItem {
  shop_id: string | null;
  keyword: string;
  thumb_image: string | null;
}

export interface RecommendList {
  shops: RecommendItem[];
  hashtags: RecommendItem[];
}

const defaultValue: RecommendList = {
  shops: Array<RecommendItem>(0),
  hashtags: Array<RecommendItem>(0),
};

export const recommendListState = atom<RecommendList>({
  key: "RecommendListState",
  default: defaultValue,
});
