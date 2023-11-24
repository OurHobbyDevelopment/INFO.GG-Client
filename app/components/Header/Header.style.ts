import { ValColor } from "@/app/common/color";
import styled from "styled-components";

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 4rem;
  background-color: ${ValColor.valRed};
`;

export const Nav = styled.div`
  display: flex;
  justify-content: space-around;

  width: 75rem;
`;
export const Content = styled.a`
  font-size: 1.1rem;

  text-align: center;
  text-decoration: none;

  color: white;
`;
