import { useRecoilState } from "recoil";
import FileDnD from "../../FileDnD/view";
import * as S from "./AddModal.style";
import { ModalIsOpen } from "@/app/recoil/IsOpen";
import { useState } from "react";

export const AddModal = () => {
  const [isOpen, setIsOpen] = useRecoilState(ModalIsOpen);
  const [aimPoint, setAimPoint] = useState("");
  const Close = () => setIsOpen("");

  const AimCode = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAimPoint(e.target.value);
  };

  const Apply = () => {
    if (aimPoint != "") {
      setIsOpen("");
    } else {
      alert("조준점 코드를 넣어주세요");
    }
  };
  return (
    <>
      <S.Bg onClick={Close}></S.Bg>
      <S.ModalBox>
        <S.Modal>조준점 추가</S.Modal>
        <FileDnD />
        <S.AimBox>
          <S.AimCode placeholder="조준점 코드" onChange={AimCode} />
        </S.AimBox>
        <S.Apply onClick={Apply}>적용</S.Apply>
      </S.ModalBox>
    </>
  );
};
