import { useEffect, useState } from "react";
import * as S from "./SeasonList.style";
import { useRecoilValue } from "recoil";
import { SeasonData } from "@/app/recoil/GameData";

export const SeasonList = (season: SeasonType) => {
  const state = useRecoilValue(SeasonData);

  return (
    <S.Season>
      <option value="">시즌</option>
      {state?.map((e: any, index: number) => {
        return <option key={index}>{e.key}</option>;
      })}
    </S.Season>
  );
};
