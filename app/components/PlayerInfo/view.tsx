import React, { use, useEffect, useState } from "react";
import { ValScore } from "@/app/api/valRanking";
import * as S from "./PlayerInfo.style";
import { SeeAgent, ValContent } from "@/app/api/valContent";

import { ShowTier } from "../ShowTier/view";
import { useRecoilState, useRecoilValue } from "recoil";
import { RegionRank, UpdateState, WinRate } from "@/app/recoil/GameData";
import { GotoBottomBtn } from "../GotoBottomBtn/view";
import Image from "next/image";
import More from "@/app/asset/png/more.png";

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
  const [arr, setArr] = useState<string[]>([]);
  const [update, setUpdate] = useRecoilState(UpdateState);
  const region = useRecoilValue(RegionRank);

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
          setArr((prevArr) => [...prevArr, "승리"]);
        } else {
          setArr((prevArr) => [...prevArr, "패배"]);
        }
      } else if (e.teams.red < e.teams.blue) {
        let blue = "Blue";
        if (blue == e.stats.team) {
          setArr((prevArr) => [...prevArr, "승리"]);
        } else {
          setArr((prevArr) => [...prevArr, "패배"]);
        }
      }
    });
  }, [game]);

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
            <S.Update>
              <S.UpdateBtn onClick={() => setUpdate(true)}>
                프로필 새로고침
              </S.UpdateBtn>
              <S.LastUpdate>마지막 업데이트 : {data?.last_update}</S.LastUpdate>
            </S.Update>
          </div>
        </S.Profile>
        <ShowTier playerInfo={playerInfo} />
        {game?.data?.map((e: ScoreType) => (
          <S.Body>
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
                  <S.KillDet>
                    {e.stats.kills}&nbsp;/&nbsp;
                    <S.Death>{e.stats.deaths}</S.Death>&nbsp;/&nbsp;
                    {e.stats.assists}
                  </S.KillDet>
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
            <S.More>
              <Image src={More} alt="more" width={30} height={30} />
            </S.More>
          </S.Body>
        ))}
      </S.Text>
    </S.InfoBox>
  );
}
