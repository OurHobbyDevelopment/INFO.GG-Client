import * as S from "./RankHeader.style";

export const RankHeader = () => {
  return (
    <S.Header>
      <S.Rank>순위</S.Rank>
      <S.Name>이름</S.Name>
      <S.Tier>티어</S.Tier>
      <S.WinRate>승률</S.WinRate>
    </S.Header>
  );
};
