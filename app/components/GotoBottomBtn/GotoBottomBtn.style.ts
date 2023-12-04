import { ClickColor, HoverColor, ValColor } from "@/app/common/color";
import styled from "styled-components";

export const BottomBtn = styled.button`
  position: fixed;
  color: white;
  background-color: ${ValColor.valRed};
  right: 8%;
  bottom: 10%;
  width: 5rem;
  height: 5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 600;
  border-radius: 50%;
  border: none;
  font-size: 16px;
  z-index: 1;
  border: none;
  cursor: pointer;
  &:hover {
    background-color: ${HoverColor.valRed};
  }

  &:active {
    background-color: ${ClickColor.valRed};
  }
`;
