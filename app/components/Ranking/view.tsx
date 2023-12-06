import { useEffect, useState } from "react";
import * as S from "./Ranking.style";
import { AffinityList } from "./affinity";
import { ValContent } from "@/app/api/valContent";
import { ValRanking } from "@/app/api/valRanking";
import { useRecoilState } from "recoil";
import { GameData, RegionRank } from "@/app/recoil/GameData";
import { SearchIsOpen } from "@/app/recoil/IsOpen";

export const Ranking = () => {
  const [rankings, setRankings] = useState<{ [key: string]: RankType[] }>({});
  const [gameData, setGameData] = useRecoilState(GameData);
  const [isOpen, setIsOpen] = useRecoilState(SearchIsOpen);
  const [region, setRegion] = useRecoilState(RegionRank);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const regions = ["kr", "eu", "na", "latam", "br", "ap"];
        const newRankings: any = {};

        for (const region of regions) {
          const response = await ValRanking(region);
          newRankings[region] = response.data;
        }

        setRankings(newRankings);
      } catch (error) {
        console.error("Error :", error);
      }
    };

    fetchData();
  }, []);

  const getRankingsByRegion = (region: string): RankType[] | undefined => {
    return rankings[region];
  };

  const showPlayer = async (index: number, region: string) => {
    setRegion(region);
    const targetPlayer = getRankingsByRegion(region)?.[index];
    const name = targetPlayer?.gameName;
    const tag = targetPlayer?.tagLine;

    if (name && tag) {
      const Account = await ValContent(name, tag);
      setGameData(Account.data);
      setIsOpen(false);
    } else {
      alert("비공개 계정입니다.");
    }
  };

  return (
    <S.RankingBox>
      <S.Title>랭킹</S.Title>
      <S.Rank>
        {AffinityList.map(({ id, name }) => (
          <S.Grid key={id}>
            <S.Title2>
              {name}
              <S.Move>
                <S.Text>Top 5</S.Text>
              </S.Move>
            </S.Title2>
            <S.Ranking>
              {getRankingsByRegion(name)
                ?.slice(0, 5)
                .map((e: RankType, index: number) => (
                  <S.Score key={index}>
                    {e.leaderboardRank}위 |&nbsp;
                    <S.UserName onClick={() => showPlayer(index, name)}>
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
