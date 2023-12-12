import styled from "styled-components";

export const TierBox = styled.div`
  background-color: #2d3245;
  height: 14.5rem;
  width: 14rem;
  margin-bottom: 1.5rem;
  border-top-left-radius: 15px;
  border-bottom-left-radius: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.p`
  background-color: #373c4f;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 20%;
  font-size: 16px;
  font-weight: 600;
  border-top-left-radius: 15px;
  margin-bottom: 30px;
`;
export const TierTxt = styled.p`
  margin-top: 10px;
  margin-bottom: 10px;
  font-size: 16px;
`;
export const Select = styled.div`
  display: flex;

  gap: 20px;
`;

export const Episode = styled.select`
  margin-top: 30px;
  margin-bottom: 15px;
  width: 5rem;
  text-align: center;
`;

export const Act = styled.select`
  margin-top: 30px;
  margin-bottom: 15px;
  width: 5rem;
  text-align: center;
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 20px;
  width: 100%;
  height: 100%;
`;

export const Score = styled.div`
  font-size: 20px;
  font-weight: 600;
`;

export const Record = styled.div`
  font-size: 16px;
  margin-top: 10px;
`;
