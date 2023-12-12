import { winLoseColor } from "@/app/common/color";
import styled from "styled-components";

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

export const ScoreBox = styled.div`
  height: 6rem;
  padding: 20px;
  width: 55rem;
  background-color: ${winLoseColor.valBlue};
  display: flex;
`;

export const Score = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 70%;
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
  background-color: ${winLoseColor.valBlue};
  margin-bottom: 5px;
`;

export const More = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${winLoseColor.valDeepBlue};
  height: 8.5rem;
  width: 3rem;
  cursor: pointer;
`;

export const Update = styled.div``;

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
