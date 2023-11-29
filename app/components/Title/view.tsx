import * as S from "./Title.style";
import Image from "next/image";
import title from "../../asset/png/title.png";
import { useRecoilValue } from "recoil";
import { SearchIsOpen } from "@/app/recoil/IsOpen";

export default function Title() {
  const isOpen = useRecoilValue(SearchIsOpen);
  return (
    <S.TitleBox data={isOpen}>
      <Image src={title} alt="title" width={290} height={50} />
    </S.TitleBox>
  );
}
