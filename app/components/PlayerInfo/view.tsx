import { ValScore } from "@/app/api/valContent";
import { useEffect, useState } from "react";

import * as S from "./PlayerInfo.style";

export default function PlayerInfo({ data, profile, isEnter }: any) {
  const [game, setGame] = useState<any>({});
  const [total, setTotal] = useState<number>(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await ValScore(data.puuid);
        setTotal(res.data.results.total);
        setGame(res);
      } catch (error) {
        console.error("Error :", error);
      }
    };
    fetchData();
  }, [data.puuid]);
  return (
    <S.InfoBox>
      <S.Text>
        <S.Profile>
          <S.Card src={profile} alt="Profile Image" />
          <div>
            <S.Level>LV {data.account_level}</S.Level>

            <S.Name>
              {data.name}#{data.tag}
            </S.Name>
          </div>
        </S.Profile>
        {game.data?.data.map((e: any) => {
          return (
            <div>
              <hr />
              <p>맵 : {e.meta.map?.name}</p>
              <p>모드 : {e.meta.mode}</p>
              <p>시즌 : {e.meta.season?.short}</p>
              <p>시작 시간 : {e.meta.started_at}</p>
              <p>어시스트 : {e.stats.assists}</p>
              <p>요원 : {e.stats.character?.name}</p>
              <p>사망 : {e.stats.deaths}</p>
              <p>킬 : {e.stats.kills}</p>
              <p>점수 : {e.stats.score}</p>
              <p>티어 : {e.stats.tier}</p>
              <p>팀 : {e.stats.team}</p>
              <hr />
            </div>
          );
        })}
      </S.Text>
    </S.InfoBox>
  );
}
