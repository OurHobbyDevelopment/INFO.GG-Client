import React, { useEffect, useState } from "react";
import { SeeAgent } from "@/app/api/valContent";
import { SeeRank } from "@/app/api/valRanking";
import { ValScore } from "@/app/api/valRanking";
import * as S from "./PlayerInfo.style";

const extractDateTime = (isoDateString: string) => {
  const dateObject = new Date(isoDateString);

  // 년-월-일 추출
  const formattedDate = dateObject.toISOString().split("T")[0];

  // 시간 추출
  const formattedTime = dateObject.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });

  return { formattedDate, formattedTime };
};

export default function PlayerInfo({ data }: AccountType) {
  const [game, setGame] = useState<GameScoreType>();
  const [total, setTotal] = useState<number>(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await ValScore(data.puuid);
        console.log(res);
        // const res3 = await SeeAgent(data.puuid);
        setTotal(res.data.results.total);
        setGame(res.data);
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
          <S.Card src={data.card.small} alt="Profile Image" />
          <div>
            <S.Level>LV {data.account_level}</S.Level>
            <S.Name>
              {data.name}#{data.tag}
            </S.Name>
          </div>
        </S.Profile>
        {game?.data?.map((e: ScoreType) => (
          <S.ScoreBox key={e.meta.started_at}>
            <S.Score>
              <div>
                <S.Mode>{e.meta.mode}</S.Mode>
                <S.Date>
                  {extractDateTime(e.meta.started_at).formattedDate}
                </S.Date>
                <S.Time>
                  {extractDateTime(e.meta.started_at).formattedTime}
                </S.Time>
              </div>
              <div>
                <S.KillDeat>
                  {e.stats.kills}&nbsp;/&nbsp;
                  <S.Death>{e.stats.deaths}</S.Death>&nbsp;/&nbsp;
                  {e.stats.assists}
                </S.KillDeat>
              </div>
              <div>
                <p>
                  {e.teams.blue} : {e.teams.red}
                </p>
              </div>
              {/* <p>맵 : {e.meta.map?.name}</p> */}
              {/* <p>시즌 : {e.meta.season?.short}</p>

   
            <p>요원 : {e.stats.character?.name}</p>
            <p>티어 : {e.stats.tier}</p>
            <p>팀 : {e.stats.team}</p> */}
            </S.Score>
          </S.ScoreBox>
        ))}
      </S.Text>
    </S.InfoBox>
  );
}
