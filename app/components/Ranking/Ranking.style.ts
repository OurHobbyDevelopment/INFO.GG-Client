import { ValColor } from "@/app/common/color";
import styled from "styled-components";

export const RankingBox = styled.div`
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Rank = styled.div`
  display: grid;
  place-items: center;
  width: 60rem;
  grid-template-columns: 1fr 1fr 1fr;
`;

export const Grid = styled.div`
  background-color: #252a3c;
  width: 18rem;
  height: 18rem;
  margin-bottom: 5rem;

  border-radius: 10px;
`;

export const Title = styled.div`
  width: 58rem;
  margin-bottom: 2rem;

  font-size: 1.5rem;
  font-weight: 600;
`;

export const Title2 = styled.p`
  display: flex;
  align-items: center;
  color: ${ValColor.valRed};
  font-size: 20px;
  font-weight: 600;
  justify-content: space-between;
  padding: 20px;
  background-color: #373c4f;
  height: 5%;
`;

export const Move = styled.p`
  font-size: 13px;
  cursor: pointer;
  color: white;
`;

export const Ranking = styled.div`
  background-color: #2d3245;
`;

export const Score = styled.p`
  display: flex;
  align-items: center;
  height: 3rem;
  border-bottom: 1px solid gray;
  padding-left: 10px;
  font-size: 14px;
`;

export const Text = styled.p`
  /* text-decoration: none; */
  color: white;
  font-size: 18px;
`;

export const UserName = styled.p`
  transition: 0.1s;
  cursor: pointer;
  &:hover {
    opacity: 0.5;
  }
`;
