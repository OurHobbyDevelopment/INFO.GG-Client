import { useRecoilState } from "recoil";
import * as S from "./CreateBtn.style";
import { ModalIsOpen } from "@/app/recoil/IsOpen";
import { AddModal } from "../Modal/AddModal/view";
import { aimImg } from "@/app/recoil/AimData";

export const CreateBtn = () => {
  const [isOpen, setIsOpen] = useRecoilState(ModalIsOpen);
  const [previewUrl, setPreviewUrl] = useRecoilState(aimImg);
  const Open = () => {
    setIsOpen("addModalOpen");
    setPreviewUrl("");
  };

  return (
    <S.CreateBtnBox>
      <S.CreateBtn onClick={Open}>추가</S.CreateBtn>
      {isOpen == "addModalOpen" ? <AddModal /> : null}
    </S.CreateBtnBox>
  );
};
