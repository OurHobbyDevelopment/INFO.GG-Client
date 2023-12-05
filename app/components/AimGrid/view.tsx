import { useRecoilValue } from "recoil";
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

  return (
    <S.Aim>
      <S.AimGridBox>
        {state?.data.map((e: any) => (
          <S.AimGrid key={e.id}>
            <S.AimImg>조준선 이미지</S.AimImg>
            <S.Code>복사</S.Code>
          </S.AimGrid>
        ))}
      </S.AimGridBox>
    </S.Aim>
  );
};
