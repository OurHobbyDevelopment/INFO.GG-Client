import React, { useEffect, useState } from "react";
import { ValScore } from "@/app/api/valRanking";
import * as S from "./PlayerInfo.style";
import { SeeAgent } from "@/app/api/valContent";

import { ShowTier } from "../ShowTier/view";
import { useRecoilState, useRecoilValue } from "recoil";
import { RegionRank } from "@/app/recoil/GameData";
import { GotoBottomBtn } from "../GotoBottomBtn/view";

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
  // const [game, setGame] = useState<GameScoreType>();
  const [game, setGame] = useState<any>();
  const [total, setTotal] = useState<number>(0);
  const [playerInfo, setPlayerInfo] = useState<any>();
  const [whoWin, setWhoWin] = useState<string>("");
  const region = useRecoilValue(RegionRank);
  let arr: any = [];

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await ValScore(data.puuid);
        const res2 = await SeeAgent(region, data.name, data.tag); // add name
        setPlayerInfo(res2.data.data);
        setTotal(res.data.results.total);
        setGame(res.data);
      } catch (error) {
        console.error("Error :", error);
      }
    };
    fetchData();
  }, [data.puuid]);

  useEffect(() => {
    game?.data.map((e: any) => {
      if (e.teams.red > e.teams.blue) {
        let red = "Red";
        if (red == e.stats.team) {
          arr.push("승리");
        } else {
          arr.push("패배");
        }
      } else if (e.teams.red < e.teams.blue) {
        let blue = "Blue";
        if (blue == e.stats.team) {
          arr.push("승리");
        } else {
          arr.push("패배");
        }
      }
    });
  });

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
        <ShowTier playerInfo={playerInfo} />
        {game?.data?.map((e: ScoreType) => (
          <S.ScoreBox key={e.meta.id}>
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
                  {e.teams.blue == null ? (
                    <div>없음</div>
                  ) : (
                    <div>
                      {e.teams.blue} : {e.teams.red}
                    </div>
                  )}
                </p>
              </div>
              <GotoBottomBtn />
            </S.Score>
          </S.ScoreBox>
        ))}
      </S.Text>
    </S.InfoBox>
  );
}
