import { ClickColor, HoverColor, ValColor } from "@/app/common/color";
import styled, { css } from "styled-components";

export const Box = styled.div`
  display: flex;
  justify-content: center;

  height: 12rem;
`;

export const SearchBox = styled.input`
  width: 40rem;
  height: 3rem;
  font-size: 1.1rem;

  margin-right: 5px;
  padding-left: 15px;

  color: white;
  background-color: ${ValColor.deepGray};

  border-color: ${ValColor.valRed};
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  outline: none;

  -ms-user-select: none;
  -moz-user-select: -moz-none;
  -khtml-user-select: none;
  -webkit-user-select: none;
  user-select: none;
`;

export const SearchBtn = styled.div`
  &:hover {
    background-color: ${HoverColor.valRed};
  }

  &:active {
    background-color: ${ClickColor.valRed};
  }

  width: 8rem;
  height: 3.3rem;
  font-size: 1.2rem;
  font-weight: bold;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: ${ValColor.valRed};
  color: white;

  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  cursor: pointer;

  -ms-user-select: none;
  -moz-user-select: -moz-none;
  -khtml-user-select: none;
  -webkit-user-select: none;
  user-select: none;
`;
