import { ClickColor, HoverColor, ValColor } from "@/app/common/color";
import styled from "styled-components";

export const CreateBtnBox = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
  width: 80%;
  height: 10rem;
`;

export const CreateBtn = styled.button`
  &:hover {
    background-color: ${HoverColor.valRed};
  }

  &:active {
    background-color: ${ClickColor.valRed};
  }
  width: 8rem;
  height: 3rem;
  color: white;
  font-size: 1rem;
  font-weight: 600;
  border: 2px solid gray;
  cursor: pointer;
  border-radius: 10px;
  background-color: ${ValColor.valRed};
`;
