import * as S from "./IsOpen.style";
import { useRecoilState } from "recoil";
import { FooterIsOpen } from "@/app/recoil/IsOpen";

export const IsOpen = () => {
  const [state, setState] = useRecoilState(FooterIsOpen);

  const open = () => {
    setState(true);
  };
  return (
    <S.OpenBox onClick={open}>
      <S.OpenBar>
        <S.Line></S.Line>
        <S.Line></S.Line>
        <S.Line></S.Line>
      </S.OpenBar>
    </S.OpenBox>
  );
};
