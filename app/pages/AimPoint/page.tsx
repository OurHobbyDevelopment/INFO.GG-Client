"use client";
import { ValColor } from "@/app/common/color";
import Header from "@/app/components/Header/view";
import Title from "@/app/components/Title/view";

import styled from "styled-components";

import Image from "next/image";
import Footer from "@/app/components/Footer/view";
import { CreateBtn } from "@/app/components/CreateBtn/view";
import { AimGrid } from "@/app/components/AimGrid/view";

export default function PlayerSearch() {
  return (
    <Bg>
      {/* <Img src={bg} alt="bg" /> */}
      <Header />
      <Title />
      <CreateBtn />
      <AimGrid />
      <Footer />
    </Bg>
  );
}

const Bg = styled.body`
  background-color: ${ValColor.black};
`;

const Img = styled(Image)`
  position: absolute;
  z-index: -1;
  bottom: 0px;
  left: 50%;
  width: 35%;
  height: auto;
  opacity: 0.7;
`;
