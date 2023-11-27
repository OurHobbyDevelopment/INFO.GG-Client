import * as S from "./Footer.style";

import title from "@/app/asset/png/title.png";
import github from "@/app/asset/png/github.png";
import insta from "@/app/asset/png/insta.png";
import arrow from "@/app/asset/png/arrow.png";

import { ClientUrl } from "@/app/utils/url";
import { useRecoilState } from "recoil";
import { FooterIsOpen } from "@/app/recoil/IsOpen";
import { IsOpen } from "../IsOpen/view";
import { useState } from "react";

export default function Footer() {
  const [isOpen, setIsOpen] = useRecoilState(FooterIsOpen);

  const close = () => {
    setIsOpen(false);
  };

  return (
    <>
      <S.FooterBox isOpen={isOpen}>
        <S.Footer>
          <S.Top>
            <a href={ClientUrl.MainUrl}>
              <S.Img src={title} alt="title" />
            </a>
            <S.Arrow src={arrow} alt="arrow" onClick={close} />
          </S.Top>
          <S.Link>
            <a href="https://github.com/OurHobbyDevelopment/INFO.GG-Client">
              <S.GitHub src={github} alt="github" />
            </a>
            <a href="https://www.instagram.com/yunj05763/">
              <S.Insta src={insta} alt="insta" />
            </a>
            <S.Content>
              <S.Call>010-9363-2843</S.Call>
              <S.Mail>a01093632843@gmail.com</S.Mail>
            </S.Content>
          </S.Link>
        </S.Footer>
      </S.FooterBox>
      {isOpen ? null : <IsOpen />}
    </>
  );
}
