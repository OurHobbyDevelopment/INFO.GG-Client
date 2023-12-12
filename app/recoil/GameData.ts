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

export const WinRate = atom<any | undefined>({
  key: "winRate",
  default: undefined,
});

export const UpdateState = atom<boolean>({
  key: "updateState",
  default: false,
});
