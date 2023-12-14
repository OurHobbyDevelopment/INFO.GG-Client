import { useEffect, useState } from "react";
import * as S from "./HistoryTier.style";
import { useRecoilState } from "recoil";
import { SeasonData } from "@/app/recoil/GameData";
export const HistoryTier = ({ history }: any) => {
  const [filteredData, setFilteredData] = useRecoilState(SeasonData);
  let arr: any = [];
  useEffect(() => {
    if (history) {
      const data = Object.entries(history)
        .filter(
          ([key, value]: [string, any]) =>
            !value.error && value.final_rank_patched !== "Unrated"
        )
        .map(([key, value]: [string, any]) => ({
          key,
          finalRankPatched: value.final_rank_patched,
        }));

      setFilteredData(data);
    }
  }, [history]);

  return (
    <S.HistoryBox>
      {filteredData.slice(0, 3).map((e: any) => (
        <S.HistoryTier key={e.key}>
          {e.key} : {e.finalRankPatched}  
        </S.HistoryTier>
      ))}
      <S.MoreSeason>
        <S.DefaultValue value="">More Season</S.DefaultValue>
        {filteredData.slice(3).map((e: any) => (
          <S.DefaultValue key={e.key} value="">
            {e.key} : {e.finalRankPatched}
          </S.DefaultValue>
        ))}
      </S.MoreSeason>
    </S.HistoryBox>
  );
};
