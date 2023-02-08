import { atom } from "recoil";

const defaultValue = false;

export const searchingState = atom<boolean>({
  key: "SearchingState",
  default: defaultValue,
});
