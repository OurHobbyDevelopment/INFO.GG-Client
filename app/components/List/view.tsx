import * as S from "./List.style";
import { AffinityList } from "../Ranking/affinity";

import { useRecoilState } from "recoil";
import { selectContry, selectTier } from "@/app/recoil/ContryData";

export const List = () => {
  const [contry, setContry] = useRecoilState(selectContry);
  const [tier, setTier] = useRecoilState(selectTier);

  const handleSelectContry = (e: React.ChangeEvent<HTMLSelectElement>) =>
    setContry(e.target.value);
  const handleSelectTier = (e: React.ChangeEvent<HTMLSelectElement>) =>
    setTier(e.target.value);
  return (
    <S.ListBox>
      <S.List>
        <S.Contry onChange={handleSelectContry}>
          <option value="">지역</option>
          {AffinityList.map((e) => (
            <option key={e.id} value={e.name}>
              {e.name.toLocaleUpperCase()}
            </option>
          ))}
        </S.Contry>
        <S.Contry onChange={handleSelectTier}>
          <option value="">티어</option>
          <option value="radiant">레디언트</option>
          <option value="im3">불멸3</option>
          <option value="im2">불멸2</option>
          <option value="im1">불멸1</option>
        </S.Contry>
      </S.List>
    </S.ListBox>
  );
};
