"use client";
import { useState } from "react";
import axios from "axios";
import { Url } from "@/app/utils/url";

export default function PlayerSearchBarView() {
  const [RiotID, setRiotID] = useState<string>("");

  const WriteRiotID = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRiotID(e.target.value);
  };

  const SearchRiotID = () => {
    const [gameName, tagLine] = RiotID.split("#");
    console.log(`id : ${gameName}, tag : ${tagLine}`);
    axios
      .get(
        `${Url.Contry}/riot/account/v1/accounts/by-riot-id/${gameName}/${tagLine}?api_key=${process.env.NEXT_PUBLIC_API_KEY}`
      )
      .then((res) => {
        console.log(res);
      });
  };
  return (
    <div>
      <input placeholder="Riot ID#태그 입력" onChange={WriteRiotID}></input>
      <button onClick={SearchRiotID}>검색</button>
    </div>
  );
}
