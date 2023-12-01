import { useEffect, useState } from "react";
import * as S from "./Skin.style";

import VP from "@/app/asset/png/vp.png";
import { WeaponSkin } from "@/app/api/ValWeapon";
import Image from "next/image";
export const Skin = () => {
  const [weaponData, setWeaponData] = useState<any>();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await WeaponSkin();
        setWeaponData(res.data.data.offers);
      } catch (error) {
        console.error("Error :", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      {/* <WeaponSearch /> 나중에 (지금 굳이 필요없음)*/}
      {weaponData?.map((e: WeaponSkinType) => {
        return (
          <S.GridBox key={e.skin_id}>
            {e.cost > 975 && (
              <S.Grid>
                <S.Name>
                  <Image
                    src={e.content_tier.icon}
                    alt="grade"
                    width={40}
                    height={40}
                  />
                  {e.name} | <S.Img src={VP} alt="cash" />
                  {e.cost}VP
                </S.Name>
                <Image src={e.icon} alt="weaponSkin" width={180} height={60} />
              </S.Grid>
            )}
          </S.GridBox>
        );
      })}
    </div>
  );
};
