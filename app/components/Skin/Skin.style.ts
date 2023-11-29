import styled from "styled-components";
import Image from "next/image";

export const GridBox = styled.div`
  color: white;
  display: flex;
  justify-content: center;
  /* align-items: center; */
`;
export const Grid = styled.div`
  width: 60rem;
  height: 7rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 2px solid black;
  font-size: 22px;
`;

export const Name = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const Img = styled(Image)`
  width: auto;
  height: 30px;
  border-radius: 50%;
`;
