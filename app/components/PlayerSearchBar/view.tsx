"use client";
import { useState } from "react";
import axios from "axios";
import { Url } from "@/app/utils/url";
import { ValContent } from "@/app/api/valContent";

export default function PlayerSearchBarView() {
  const [RiotID, setRiotID] = useState<string>("");

  const WriteRiotID = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRiotID(e.target.value);
  };

  const SearchRiotID = async () => {
    const [name, tag] = RiotID.split("#");
    const res = await ValContent(name, tag);
  };

  return (
    <div>
      <input placeholder="Riot ID#태그 입력" onChange={WriteRiotID}></input>
      <button onClick={SearchRiotID}>검색</button>
    </div>
  );
}
