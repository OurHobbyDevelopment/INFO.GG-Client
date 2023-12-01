import * as S from "./ShowTier.style";
import Image from "next/image";

export const ShowTier = ({ playerInfo }: any) => {
  // console.log(playerInfo);
  return (
    <S.TierBox>
      <S.Title>티어</S.Title>
      <S.Select>
        <S.Episode>
          <option>에피소드</option>
        </S.Episode>
        <S.Act>
          <option>액트</option>
        </S.Act>
      </S.Select>
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
          <div>비어있음</div>
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
