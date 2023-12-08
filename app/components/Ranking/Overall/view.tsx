import { useRecoilState, useRecoilValue } from "recoil";
import { List } from "../../List/view";
import * as S from "./Overall.style";
import { selectContry } from "@/app/recoil/ContryData";
import { useEffect, useState } from "react";
import { ValRanking } from "@/app/api/valRanking";
import { SeeAgent, ValContent } from "@/app/api/valContent";
import { GameData, RegionRank } from "@/app/recoil/GameData";
import { GotoBottomBtn } from "../../GotoBottomBtn/view";
import { TierCalc } from "./TierCalc/view";

export const Overall = () => {
  const contry = useRecoilValue(selectContry);
  const [ranking, setRanking] = useState<RankType[]>();
  const [gameData, setGameData] = useRecoilState(GameData);
  const [region, setRegion] = useRecoilState(RegionRank);

  const [gameNames, setGameNames] = useState<any>([]);
  const [tagLines, setTagLines] = useState<any>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (contry !== "") {
          const res = await ValRanking(contry);
          setRanking(res?.data);
          console.log(res);
        }
      } catch (error) {
        console.error("Error :", error);
      }
    };
    fetchData();
  }, [contry, ranking]);

  const showPlayer = async (name: string, tag: string) => {
    const Account = await ValContent(name, tag);

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
        <S.Ranking>
          {contry == "" ? (
            <S.Empty>지역을 선택해 주세요</S.Empty>
          ) : (
            <>
              {ranking?.map((e, index) => (
                <S.PlayerInfo>
                  <S.Rank>{index + 1}위</S.Rank>
                  <S.GameName
                    onClick={() => showPlayer(e.gameName, e.tagLine)}
                    name={e.gameName}
                  >
                    {e.gameName != "" ? (
                      <>
                        {e.gameName}#{e.tagLine}
                      </>
                    ) : (
                      "비공개 계정"
                    )}
                  </S.GameName>
                  <S.Tier>
                    <TierCalc score={e.rankedRating} tier={e.competitiveTier} />
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
