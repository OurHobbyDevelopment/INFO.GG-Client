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
    <S.Box>
      <S.Center>
        {weaponData?.map((e: WeaponSkinType) => {
          return (
            e.cost > 975 && (
              <S.GridBox key={e.skin_id}>
                <S.Grid>
                  <S.GunImg
                    src={e.icon}
                    alt="weaponSkin"
                    width={"auto"}
                    height={80}
                  />
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
                </S.Grid>
              </S.GridBox>
            )
          );
        })}
      </S.Center>
    </S.Box>
  );
};
