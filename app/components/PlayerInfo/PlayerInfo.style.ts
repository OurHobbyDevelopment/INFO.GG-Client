import { winLoseColor } from "@/app/common/color";
import styled, { css } from "styled-components";

export const InfoBox = styled.div`
  display: flex;
  justify-content: center;
`;
export const Text = styled.div`
  color: white;
  width: 60rem;
`;

export const Profile = styled.div`
  display: flex;
  height: 9rem;
  margin-bottom: 1.5rem;
`;

export const Card = styled.img`
  border-radius: 10px;
`;
export const Level = styled.p`
  font-size: 1rem;
  margin-left: 10px;
`;

export const Name = styled.p`
  font-size: 1.5rem;
  font-weight: 600;
  margin: 10px;
`;

export const ScoreBox = styled.div<{ result: string }>`
  height: 6rem;
  padding: 20px;
  width: 55rem;
  display: flex;

  ${({ result }) => {
    if (result === "승리") {
      return css`
        background-color: ${winLoseColor.valWin};
      `;
    } else if (result === "패배") {
      return css`
        background-color: ${winLoseColor.valLose};
      `;
    } else if (result === "데스매치") {
      return css`
        background-color: #02a357;
      `;
    }
  }}
`;

export const Score = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 70%;
`;

export const Box = styled.div`
  width: 30%;
`;

export const Mode = styled.p`
  font-weight: 600;
  margin-bottom: 10px;
  font-size: 120%;
`;

export const Date = styled.p`
  margin-bottom: 10px;
`;

export const Time = styled.p`
  margin-bottom: 10px;
`;

export const KillDet = styled.p`
  display: flex;
  font-size: 22px;
  font-weight: 600;
`;

export const Death = styled.p`
  color: red;
`;

export const Body = styled.div`
  display: flex;
  background-color: ${winLoseColor.valWin};
  margin-bottom: 5px;
`;

export const More = styled.div<{ result: string }>`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 8.5rem;
  width: 3rem;
  cursor: pointer;

  ${({ result }) => {
    if (result === "승리") {
      return css`
        background-color: ${winLoseColor.valDeepWin};
      `;
    } else if (result === "패배") {
      return css`
        background-color: ${winLoseColor.valDeepLose};
      `;
    } else if (result === "데스매치") {
      return css`
        background-color: #00703b;
      `;
    }
  }}
`;

export const UpdateBtn = styled.button`
  margin: 10px;
  width: 8rem;
  height: 3rem;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  background-color: #00b48c;
  color: white;
  font-weight: 600;
  font-size: 15px;

  &:hover {
    background-color: #02c99d;
  }

  &:active {
    background-color: #018f70;
  }
`;

export const LastUpdate = styled.div`
  margin-left: 10px;
  opacity: 0.7;
`;

export const Result = styled.div`
  width: 5rem;
`;
