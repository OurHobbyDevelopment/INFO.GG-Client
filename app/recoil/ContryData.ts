import { atom } from "recoil";

export const selectContry = atom<string>({
  key: "selectContry",
  default: "",
});
