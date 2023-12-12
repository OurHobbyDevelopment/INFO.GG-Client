import Image from "next/image";
import Radiant from "@/app/asset/png/Rank/radiant.png";
import im3 from "@/app/asset/png/Rank/im3.png";
import im2 from "@/app/asset/png/Rank/im2.png";
import im1 from "@/app/asset/png/Rank/im1.png";

export const TierCalc = ({ rankedRating, competitiveTier }: any) => {
  let imageSrc;
  if (competitiveTier === 27) {
    imageSrc = Radiant.src;
  } else if (competitiveTier === 26) {
    imageSrc = im3.src;
  } else if (competitiveTier === 25) {
    imageSrc = im2.src;
  } else if (competitiveTier === 24) {
    imageSrc = im1.src;
  }

  return (
    <>
      {imageSrc && (
        <Image
          src={imageSrc}
          alt={`rank-${competitiveTier}`}
          width={30}
          height={30}
        />
      )}
      {rankedRating}
    </>
  );
};
