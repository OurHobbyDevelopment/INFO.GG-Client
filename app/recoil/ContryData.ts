import { atom } from "recoil";

export const selectContry = atom<string>({
  key: "selectContry",
  default: "",
});

export const selectTier = atom<string>({
  key: "selectTier",
  default: "",
});
