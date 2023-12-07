import * as S from "./List.style";
import { AffinityList } from "../Ranking/affinity";

import { RecoilValueReadOnly, useRecoilState, useRecoilValue } from "recoil";
import { selectContry } from "@/app/recoil/ContryData";
import { useEffect } from "react";

export const List = () => {
  const [contry, setContry] = useRecoilState(selectContry);
  const handleSelect = (e: any) => {
    setContry(e.target.value);
  };

  return (
    <S.ListBox>
      <S.List>
        <S.Contry onClick={handleSelect}>
          <option value="">지역</option>
          {AffinityList.map((e) => (
            <option key={e.id} value={e.name}>
              {e.name.toLocaleUpperCase()}
            </option>
          ))}
        </S.Contry>
      </S.List>
    </S.ListBox>
  );
};
