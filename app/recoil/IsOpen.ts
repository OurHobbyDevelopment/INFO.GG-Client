import { atom } from "recoil";

export const FooterIsOpen = atom<boolean>({
  key: "FooterClose",
  default: true,
});

export const SearchIsOpen = atom<boolean>({
  key: "SearchClose",
  default: true,
});

export const ModalIsOpen = atom<string>({
  key: "ModalOpen",
  default: "",
});
