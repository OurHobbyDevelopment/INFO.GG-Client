"use client";
import { useEffect, useState } from "react";
import { ValContent } from "@/app/api/valContent";
import { WinnerRate } from "@/app/api/valRanking";

import * as S from "./PlayerSearchBar.style";
import { useRecoilState } from "recoil";
import { GameData, RegionRank, WinRate } from "@/app/recoil/GameData";
import { SearchIsOpen } from "@/app/recoil/IsOpen";

export default function PlayerSearchBarView() {
  const [RiotID, setRiotID] = useState<string>("");
  const [gameData, setGameData] = useRecoilState(GameData);
  const [isOpen, setIsOpen] = useRecoilState(SearchIsOpen);
  const [region, setRegion] = useRecoilState(RegionRank);
  const [win, setWin] = useRecoilState(WinRate);

  const WriteRiotID = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRiotID(e.target.value);
  };

  const SearchRiotID = async () => {
    if (RiotID == "") {
      alert("유저이름을 작성해주세요");
    }

    const [name, tag] = RiotID.split("#");
    const Account = await ValContent(name, tag);
    const winRate = await WinnerRate(name, tag);

    setWin(winRate?.data?.data?.by_season);

    setIsOpen(false);
    setGameData(Account.data);
    setRegion(Account.data.data.region);
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      SearchRiotID();
    }
  };

  return (
    <>
      <S.Box data={isOpen}>
        <S.SearchBox
          placeholder="Riot ID#태그 입력"
          onChange={WriteRiotID}
          onKeyPress={handleKeyPress}
        ></S.SearchBox>
        <S.SearchBtn onClick={SearchRiotID}>검색</S.SearchBtn>
      </S.Box>
    </>
  );
}
