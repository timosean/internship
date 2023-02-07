import { atom } from "recoil";

const defaultValue = Array<string>();

export const recentKeywordState = atom<string[]>({
  key: "RecentKeywordState",
  default: defaultValue,
});
