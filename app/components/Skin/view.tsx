import { useEffect, useState } from "react";
import * as S from "./Skin.style";
import { WeaponSkin } from "@/app/api/valContent";
import Image from "next/image";

export const Skin = () => {
  const [weaponData, setWeaponData] = useState<any>();
  const [cost, setCost] = useState<any>();
  const [name, setName] = useState<any>();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await WeaponSkin();
        setWeaponData(res.data.data.offers);
        console.log(res);
      } catch (error) {
        console.error("Error :", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      {weaponData?.map((e: any) => {
        console.log(e.cost > 975 && e);
        return (
          <S.GridBox>
            {e.cost > 975 && (
              <S.Grid>
                {e.name} | {e.cost}
                <img src={e.icon} alt="img" width={"auto"} height={60} />
              </S.Grid>
            )}
          </S.GridBox>
        );
      })}
    </div>
  );
};
