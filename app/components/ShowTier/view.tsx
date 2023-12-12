import * as S from "./ShowTier.style";
import Image from "next/image";
import Unranked from "@/app/asset/png/unranked.png";
import { useRecoilValue } from "recoil";
import { WinRate } from "@/app/recoil/GameData";

export const ShowTier = ({ playerInfo }: any) => {
  const winnerRate = useRecoilValue(WinRate);

  return (
    <S.TierBox>
      <S.Title>티어</S.Title>
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
          {playerInfo?.ranking_in_tier ? (
            <>
              <S.Score>
                <>{playerInfo?.ranking_in_tier}점</>
              </S.Score>
              <S.Record>
                {winnerRate?.["e7a3"].number_of_games}전&nbsp;
                {winnerRate?.["e7a3"].wins}승
              </S.Record>
            </>
          ) : null}
        </div>
      </S.Container>
    </S.TierBox>
  );
};
