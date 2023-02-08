import { atom } from "recoil";

const defaultValue = "";

export const searchInputState = atom<string>({
  key: "SearchInputState",
  default: defaultValue,
});
