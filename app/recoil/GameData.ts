import { atom } from "recoil";

export const GameData = atom<AccountType | undefined>({
  key: "gameData",
  default: undefined,
});

export const Weapon = atom<string>({
  key: "weaponName",
  default: "",
});

export const RegionRank = atom<string>({
  key: "region",
  default: "",
});
