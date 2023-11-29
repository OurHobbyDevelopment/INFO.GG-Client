import styled, { css } from "styled-components";
import Image from "next/image";

export const FooterBox = styled.div<{ isOpen: boolean }>`
  color: white;
  bottom: 0;
  width: 100%;
  position: fixed;
  display: flex;
  justify-content: center;
  background-color: #151826;

  height: ${({ isOpen }) => (isOpen ? "10rem" : "0")};
  transition: height 0.7s ease;
`;

export const Footer = styled.div`
  width: 58rem;
`;

export const Top = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
`;

export const Img = styled(Image)`
  margin-top: 20px;
  width: 8rem;
  height: 1.5rem;
`;

export const GitHub = styled(Image)`
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  margin-bottom: 10px;
  cursor: pointer;
`;

export const Insta = styled(Image)`
  width: 4.5rem;
  height: 3rem;
  cursor: pointer;
`;

export const Arrow = styled(Image)`
  width: 2rem;
  height: 2rem;
  cursor: pointer;
`;
export const Link = styled.div`
  height: 60%;

  display: flex;
  align-items: end;
`;

export const Content = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: end;
`;

export const Call = styled.p``;

export const Mail = styled.p``;
