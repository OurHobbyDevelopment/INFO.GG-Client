import * as S from "./Title.style";
import Image from "next/image";
import title from "../../asset/png/title.png";

export default function Title() {
  return (
    <S.TitleBox>
      <Image src={title} alt="title" width={290} height={50} />
    </S.TitleBox>
  );
}
