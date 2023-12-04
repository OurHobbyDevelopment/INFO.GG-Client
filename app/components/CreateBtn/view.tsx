import { useRecoilState } from "recoil";
import * as S from "./CreateBtn.style";
import { ModalIsOpen } from "@/app/recoil/IsOpen";
import { AddModal } from "../Modal/AddModal/view";

export const CreateBtn = () => {
  const [isOpen, setIsOpen] = useRecoilState(ModalIsOpen);
  const Open = () => setIsOpen("addModalOpen");

  return (
    <S.CreateBtnBox>
      <S.CreateBtn onClick={Open}>추가</S.CreateBtn>
      {isOpen == "addModalOpen" ? <AddModal /> : null}
    </S.CreateBtnBox>
  );
};
