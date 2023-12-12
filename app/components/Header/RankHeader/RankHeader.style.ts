import { ValColor } from "@/app/common/color";
import styled from "styled-components";

export const Header = styled.div`
  display: flex;
  align-items: center;
  background-color: ${ValColor.black};
  width: 60rem;
  height: 2.5rem;
  font-weight: 600;
`;

export const Rank = styled.p`
  width: 4rem;
  text-align: center;
`;

export const Name = styled.p`
  width: 18rem;
  text-align: center;
`;

export const Tier = styled.p`
  width: 20rem;
  text-align: center;
`;

export const WinRate = styled.p`
  width: 10rem;
  text-align: center;
`;
