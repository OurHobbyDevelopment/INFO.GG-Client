import { ValScore } from "@/app/api/valContent";
import { useEffect, useState } from "react";

export default function PlayerInfo({ data, profile }: any) {
  const [game, setGame] = useState<any>({});
  const [total, setTotal] = useState<number>(0);
  const [gameInfo, setGameInfo] = useState<number>(0);

  const seeScore = async () => {
    const res = await ValScore(data.puuid);
    setTotal(res.data.results.total);
    setGame(res);
  };

  return (
    <div>
      <img src={profile} alt="Profile Image" />
      <p>레벨: {data.account_level}</p>
      <p>
        이름: {data.name}#{data.tag}
      </p>
      <p>고유id: {data.puuid}</p>
      <button onClick={seeScore}>전적보기</button>
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
    </div>
  );
}
