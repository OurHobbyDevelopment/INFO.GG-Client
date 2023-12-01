"use client";
import { useEffect, useState } from "react";
import { ValContent } from "@/app/api/valContent";

import * as S from "./PlayerSearchBar.style";
import { useRecoilState } from "recoil";
import { GameData, RegionRank } from "@/app/recoil/GameData";
import { SearchIsOpen } from "@/app/recoil/IsOpen";

export default function PlayerSearchBarView() {
  const [RiotID, setRiotID] = useState<string>("");
  const [gameData, setGameData] = useRecoilState(GameData);
  const [isOpen, setIsOpen] = useRecoilState(SearchIsOpen);
  const [region, setRegion] = useRecoilState(RegionRank);
  const WriteRiotID = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRiotID(e.target.value);
  };

  const SearchRiotID = async () => {
    if (RiotID == "") {
      alert("유저이름을 작성해주세요");
    }

    const [name, tag] = RiotID.split("#");
    const Account = await ValContent(name, tag);
    console.log(Account);
    setIsOpen(false); //전적이 뜰때 검색창이 사라져야함
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
