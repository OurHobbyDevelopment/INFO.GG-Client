import * as S from "./ShowTier.style";
import Image from "next/image";
import Unranked from "@/app/asset/png/unranked.png";

export const ShowTier = ({ playerInfo }: any) => {
  return (
    <S.TierBox>
      <S.Title>티어</S.Title>
      {/* <S.Select>
        <S.Episode>
          <option>에피소드</option>
        </S.Episode>
        <S.Act>
          <option>액트</option>
        </S.Act>
      </S.Select> */}
      <S.Container>
        {playerInfo?.images.large ? (
          <>
            <Image
              src={playerInfo?.images?.large}
              alt="tierImg"
              width={90}
              height={90}
            />
          </>
        ) : (
          <>
            <Image src={Unranked} alt="unrankedIcon" width={90} height={90} />
            <p>Unranked</p>
          </>
        )}

        <div>
          <S.TierTxt>{playerInfo?.currenttierpatched}</S.TierTxt>
          <S.Score>
            {playerInfo?.ranking_in_tier ? (
              <>{playerInfo?.ranking_in_tier}점</>
            ) : null}
          </S.Score>
        </div>
      </S.Container>
    </S.TierBox>
  );
};
