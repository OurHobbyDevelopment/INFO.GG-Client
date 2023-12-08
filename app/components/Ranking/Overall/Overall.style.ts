import { ValColor } from "@/app/common/color";
import styled, { css } from "styled-components";

export const OverallBox = styled.div`
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Overall = styled.div`
  background-color: #373c4f;
  width: 60rem;
  height: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 600;
  border-bottom: 2px solid gray;
  border-top-right-radius: 20px;
  border-top-left-radius: 20px;
`;

export const ContryTxt = styled.div`
  color: ${ValColor.valRed};
  font-size: 20px;
`;

export const Ranking = styled.div`
  background-color: #2d3245;
  width: 60rem;
`;

export const Empty = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 600;
  font-size: 24px;
  opacity: 0.7;
  height: 20rem;
`;

export const PlayerInfo = styled.div`
  display: flex;
  align-items: center;
  padding-left: 20px;
  border-bottom: 2px solid gray;
  height: 6rem;
`;

export const Rank = styled.div`
  width: 3rem;
`;

export const GameName = styled.div<{ name: string }>`
  width: 18rem;
  font-size: 15px;
  ${({ name }) =>
    name == ""
      ? null
      : css`
          &:hover {
            opacity: 0.5;
          }
          transition: 0.1s;
          cursor: pointer;
        `}
`;

export const Tier = styled.div`
  width: 20rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;
