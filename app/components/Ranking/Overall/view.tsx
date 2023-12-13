import { useRecoilState, useRecoilValue } from "recoil";
import { List } from "../../List/view";
import * as S from "./Overall.style";
import { selectContry, selectTier } from "@/app/recoil/ContryData";
import { useEffect, useState } from "react";
import { ValRanking, WinnerRate } from "@/app/api/valRanking";
import { SeeAgent, ValContent } from "@/app/api/valContent";
import { GameData, RegionRank, WinRate } from "@/app/recoil/GameData";
import { GotoBottomBtn } from "../../GotoBottomBtn/view";
import { TierCalc } from "./TierCalc/view";
import { RankHeader } from "../../Header/RankHeader/view";

export const Overall = () => {
  const contry = useRecoilValue(selectContry);
  const [ranking, setRanking] = useState<RankType[]>();
  const [gameData, setGameData] = useRecoilState(GameData);
  const [region, setRegion] = useRecoilState(RegionRank);
  const [win, setWin] = useRecoilState(WinRate);
  const tier = useRecoilValue(selectTier);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (contry !== "") {
          const res = await ValRanking(contry);
          setRanking(res?.data);
        }
      } catch (error) {
        console.error("Error :", error);
      }
    };
    fetchData();
  }, [contry]);

  const showPlayer = async (name: string, tag: string) => {
    const Account = await ValContent(name, tag, false);
    const winRate = await WinnerRate(name, tag);

    setWin(winRate?.data?.data?.by_season);
    setGameData(Account.data);
    setRegion(contry);
  };

  return (
    <>
      <List />
      <S.OverallBox>
        <S.Overall>
          <S.ContryTxt>{contry.toUpperCase()}</S.ContryTxt> &nbsp; 순위표
        </S.Overall>
        <RankHeader />
        <S.Ranking>
          {contry === "" ? (
            <S.Empty>지역을 선택해 주세요</S.Empty>
          ) : (
            <>
              {ranking
                ?.filter((e) => {
                  if (tier === "radiant") return e.competitiveTier === 27;
                  if (tier === "im3") return e.competitiveTier === 26;
                  if (tier === "im2") return e.competitiveTier === 25;
                  if (tier === "im1") return e.competitiveTier === 24;
                  return true;
                })
                .map((e, index) => (
                  <S.PlayerInfo key={index}>
                    <S.Rank>{index + 1}위</S.Rank>
                    <S.GameName
                      onClick={() => showPlayer(e.gameName, e.tagLine)}
                      name={e.gameName}
                    >
                      {e.gameName !== "" ? (
                        <>
                          {e.gameName}#{e.tagLine}
                        </>
                      ) : (
                        "비공개"
                      )}
                    </S.GameName>
                    <S.Tier>
                      {e.competitiveTier ? (
                        <TierCalc
                          rankedRating={e.rankedRating}
                          competitiveTier={e.competitiveTier}
                        />
                      ) : null}
                    </S.Tier>
                  </S.PlayerInfo>
                ))}
            </>
          )}
        </S.Ranking>
      </S.OverallBox>
      <GotoBottomBtn />
    </>
  );
};
