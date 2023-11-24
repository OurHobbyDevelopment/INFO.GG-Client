"use client";
import { useEffect, useState } from "react";
import { ValContent } from "@/app/api/valContent";
import PlayerInfo from "../PlayerInfo/view";

export default function PlayerSearchBarView() {
  const [RiotID, setRiotID] = useState<string>("");
  const [res, setRes] = useState<any>({});
  const [puuid, setPuuid] = useState<string>("");
  const [profile, setProfile] = useState<string>("");

  const WriteRiotID = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRiotID(e.target.value);
  };

  const SearchRiotID = async () => {
    const [name, tag] = RiotID.split("#");
    const response = await ValContent(name, tag);
    setRes(response.data);
    setPuuid(response.data.puuid);
    setProfile(response.data.data.card.small);
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      SearchRiotID();
    }
  };

  useEffect(() => {
    console.log(profile);
  }, [profile]);

  return (
    <div>
      <input
        placeholder="Riot ID#태그 입력"
        onChange={WriteRiotID}
        onKeyPress={handleKeyPress}
      ></input>
      <button onClick={SearchRiotID}>검색</button>

      {res.data && <PlayerInfo data={res.data} profile={profile} />}
    </div>
  );
}
