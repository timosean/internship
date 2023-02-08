import { atom } from "recoil";

const defaultValue = Array<string>();

export const likedShopListState = atom<string[]>({
  key: "LikedShopListState",
  default: defaultValue,
});
