import styled from "styled-components";

export const Aim = styled.div`
  display: flex;
  justify-content: center;
`;

export const AimGridBox = styled.div`
  display: grid;
  place-items: center;
  width: 60rem;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  row-gap: 30px;
`;

export const AimGrid = styled.div`
  background-color: #2d3245;
  /* color: white; */
  width: 11rem;
  height: 14rem;
  border-radius: 10px;
  padding: 20px;

  cursor: pointer;
  transition: all 0.2s;
  &:hover {
    transform: scale(1.05);
  }
`;

export const AimImg = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #373c4f;
  height: 80%;
  color: white;
`;

export const Code = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-weight: 600;
  /* background-color: white; */
  height: 20%;
`;
