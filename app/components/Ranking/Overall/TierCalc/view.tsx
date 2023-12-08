import * as S from "./TierCalc.style";
import Image from "next/image";
import Radiant from "@/app/asset/png/Rank/radiant.png";
import im3 from "@/app/asset/png/Rank/im3.png";
import im2 from "@/app/asset/png/Rank/im2.png";
import im1 from "@/app/asset/png/Rank/im1.png";
import { useState } from "react";

export const TierCalc = ({ score, tier }: any) => {
  const [state, setState] = useState("");

  let imageSrc;
  if (tier === 27) {
    imageSrc = Radiant.src;
  } else if (tier === 26) {
    imageSrc = im3.src;
  } else if (tier === 25) {
    imageSrc = im2.src;
  } else if (tier === 24) {
    imageSrc = im1.src;
  }

  return (
    <>
      {imageSrc && (
        <Image src={imageSrc} alt={`rank-${tier}`} width={30} height={30} />
      )}
      {score}
    </>
  );
};
