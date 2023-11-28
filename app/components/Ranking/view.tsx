import { useEffect, useState } from "react";
import * as S from "./Ranking.style";
import { AffinityList } from "./affinity";
import { ValContent, ValRanking, ValScore } from "@/app/api/valContent";
import { useRecoilState } from "recoil";
import { GameData } from "@/app/recoil/GameData";

export const Ranking = () => {
  const [rank, setRank] = useState<RankType[]>();
  const [gameData, setGameData] = useRecoilState(GameData);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await ValRanking("kr");
        setRank(res.data);
      } catch (error) {
        console.error("Error :", error);
      }
    };
    fetchData();
  }, []);

  const showPlayer = async (index: number) => {
    const targetPlayer = rank?.[index];
    const name = targetPlayer?.gameName;
    const tag = targetPlayer?.tagLine;

    if (name && tag) {
      const Account = await ValContent(name, tag);
      setGameData(Account.data);
    }
  };

  return (
    <S.RankingBox>
      <S.Rank>
        {AffinityList.map(({ id, name }) => (
          <S.Grid key={id}>
            <S.Title>
              {name}
              <S.Move>
                <S.Link href="/pages/OverallRanking">전체보기</S.Link>
              </S.Move>
            </S.Title>
            <S.Ranking>
              {rank?.slice(0, 5).map((e: RankType, index: number) => (
                <S.Score key={index}>
                  {e.leaderboardRank}위 | &nbsp;
                  <S.UserName onClick={() => showPlayer(index)}>
                    {e.gameName
                      ? ` ${e.gameName}#${e.tagLine} `
                      : " 비공개 유저"}
                  </S.UserName>
                </S.Score>
              ))}
            </S.Ranking>
          </S.Grid>
        ))}
      </S.Rank>
    </S.RankingBox>
  );
};
