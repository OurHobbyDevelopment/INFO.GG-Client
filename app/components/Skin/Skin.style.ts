import styled from "styled-components";
import Image from "next/image";

export const Box = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

export const GridBox = styled.div`
  color: white;
  display: flex;
  justify-content: center;
`;

export const Grid = styled.div`
  width: 100%;
  height: 10rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const GunImg = styled.img`
  margin-bottom: 20px;
`;

export const Name = styled.div`
  display: flex;
  align-items: center;
`;

export const Img = styled(Image)`
  width: auto;
  height: 30px;
  border-radius: 50%;
`;

export const Center = styled.div`
  width: 60rem;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(20rem, 1fr));
  column-gap: 20px;
  row-gap: 50px;
`;
