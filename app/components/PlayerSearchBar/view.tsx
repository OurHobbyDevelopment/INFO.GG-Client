"use client";
import { useEffect, useState } from "react";
import { ValContent } from "@/app/api/valContent";
import PlayerInfo from "../PlayerInfo/view";

import * as S from "./PlayerSearchBar.style";

export default function PlayerSearchBarView() {
  const [isEnter, setIsEnter] = useState(false);

  const [RiotID, setRiotID] = useState<string>("");
  const [res, setRes] = useState<AccountType>();

  const WriteRiotID = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRiotID(e.target.value);
  };

  const SearchRiotID = async () => {
    const [name, tag] = RiotID.split("#");
    const Account = await ValContent(name, tag);

    setIsEnter(true);

    setRes(Account.data);
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      SearchRiotID();
    }
  };

  return (
    <>
      <S.Box>
        <S.SearchBox
          placeholder="Riot ID#태그 입력"
          onChange={WriteRiotID}
          onKeyPress={handleKeyPress}
        ></S.SearchBox>
        <S.SearchBtn onClick={SearchRiotID}>검색</S.SearchBtn>
      </S.Box>
      {res?.data && <PlayerInfo data={res.data} />}
    </>
  );
}
