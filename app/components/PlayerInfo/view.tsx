import { ValScore } from "@/app/api/valContent";

export default function PlayerInfo({ data, profile }: any) {
  const seeScore = async () => {
    const res = await ValScore(data.puuid);
    console.log(res.data.data);
    console.log(profile);
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
    </div>
  );
}
