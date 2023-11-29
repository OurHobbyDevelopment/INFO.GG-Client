import { useRecoilState } from "recoil";
import { Weapon } from "@/app/recoil/GameData";

import * as S from "./WeaponSearch.style";

export const WeaponSearch = () => {
  const [weaponName, setWeaponName] = useRecoilState(Weapon);

  const WeaponName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setWeaponName(e.target.value);
  };

  return <input placeholder="총 스킨 검색" onChange={WeaponName} />;
};
