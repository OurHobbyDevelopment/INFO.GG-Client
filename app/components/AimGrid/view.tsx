import * as S from "./AimGrid.style";
import { useEffect, useState } from "react";
import { seeAimPoint } from "@/app/api/ValAimPoint";

export const AimGrid = () => {
  const [state, setState] = useState<any>();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await seeAimPoint();
        setState(res);
      } catch (error) {
        console.error("Error :", error);
      }
    };
    fetchData();
  });

  const handleCopyClipBoard = (code: string) => {
    try {
      navigator.clipboard.writeText(code);
      alert("클립보드에 복사되었습니다.");
    } catch (error) {
      alert("클립보드 복사에 실패하였습니다.");
    }
  };

  return (
    <S.Aim>
      <S.AimGridBox>
        {state?.data.map((e: any) => (
          <S.AimGrid key={e.id} onClick={() => handleCopyClipBoard(e.code)}>
            <S.AimImg>조준선 이미지</S.AimImg>
            <S.Code>{e.title}</S.Code>
          </S.AimGrid>
        ))}
      </S.AimGridBox>
    </S.Aim>
  );
};
