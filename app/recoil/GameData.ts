import { atom } from "recoil";

export const GameData = atom<AccountType | undefined>({
  key: "gameData",
  default: undefined,
});
