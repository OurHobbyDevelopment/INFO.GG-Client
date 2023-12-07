import { useRecoilState, useRecoilValue } from "recoil";
import { List } from "../../List/view";
import * as S from "./Overall.style";
import { selectContry } from "@/app/recoil/ContryData";
import { useEffect, useState } from "react";
import { ValRanking } from "@/app/api/valRanking";
import { ValContent } from "@/app/api/valContent";
import { GameData, RegionRank } from "@/app/recoil/GameData";
import { GotoBottomBtn } from "../../GotoBottomBtn/view";

export const Overall = () => {
  const contry = useRecoilValue(selectContry);
  const [ranking, setRanking] = useState<RankType[]>();
  const [gameData, setGameData] = useRecoilState(GameData);
  const [region, setRegion] = useRecoilState(RegionRank);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (contry != "") {
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
          {ranking?.map((e, index) => (
            <S.PlayerInfo>
              {index + 1}위 &nbsp;
              <S.GameName onClick={() => showPlayer(e.gameName, e.tagLine)}>
                {e.gameName != "" ? e.gameName : "비공개 계정"}
              </S.GameName>
            </S.PlayerInfo>
          ))}
        </S.Ranking>
      </S.OverallBox>
      <GotoBottomBtn />
    </>
  );
};
