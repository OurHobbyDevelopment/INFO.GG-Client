import { ValColor } from "@/app/common/color";
import Header from "@/app/components/Header/view";
import PlayerSearchBar from "@/app/components/PlayerSearchBar/view";
import Title from "@/app/components/Title/view";

import styled from "styled-components";

import bg from "../../asset/png/bg.png";
import Image from "next/image";
import Footer from "@/app/components/Footer/view";
import { Ranking } from "@/app/components/Ranking/view";
import PlayerInfo from "@/app/components/PlayerInfo/view";

import { GameData } from "@/app/recoil/GameData";
import { useRecoilValue } from "recoil";

export default function PlayerSearch() {
  const gameData = useRecoilValue(GameData);
  return (
    <Bg>
      <Img src={bg} alt="bg" />
      <Header />
      <Title />
      <PlayerSearchBar />
      {gameData?.data ? <PlayerInfo data={gameData.data} /> : <Ranking />}
      <Footer />
    </Bg>
  );
}

const Bg = styled.body`
  background-color: ${ValColor.black};

  /* overflow: hidden; */
`;

const Img = styled(Image)`
  position: absolute;
  z-index: -1;
  bottom: 0;
  left: 50%;
  width: 35%;
  height: auto;
  opacity: 0.7;
`;
