import { atom } from "recoil";

export const FooterIsOpen = atom<boolean>({
  key: "close",
  default: true,
});
