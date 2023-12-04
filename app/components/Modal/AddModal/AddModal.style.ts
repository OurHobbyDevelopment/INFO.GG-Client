import { ClickColor, HoverColor, ValColor } from "@/app/common/color";
import styled from "styled-components";

export const Bg = styled.div`
  position: absolute;
  background-color: gray;
  width: 100vw;
  height: 100vh;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  opacity: 0.5;

  cursor: pointer;
`;

export const ModalBox = styled.div`
  background-color: #373c4f;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  border: 2px solid ${ValColor.valRed};
  width: 30rem;
  height: 35rem;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  @keyframes fadeInUp {
    0% {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  animation: fadeInUp 1s;
`;

export const Top = styled.div`
  background-color: red;
  display: flex;
  width: 80%;
  justify-content: center;
`;

export const Modal = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  color: white;
  font-size: 20px;
  font-weight: 600;
  height: 20%;
`;

export const AimBox = styled.div`
  height: 20%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const AimCode = styled.input`
  color: white;
  width: 20rem;
  height: 3rem;
  border: none;
  padding-left: 15px;
  font-size: 16px;
  font-weight: 600;
  background-color: ${ValColor.deepGray};
`;

export const Apply = styled.button`
  background-color: ${ValColor.valRed};
  width: 10rem;
  height: 3rem;
  border-radius: 10px;
  color: white;
  font-size: 18px;
  font-weight: 600;
  cursor: pointer;
  &:hover {
    background-color: ${HoverColor.valRed};
  }

  &:active {
    background-color: ${ClickColor.valRed};
  }
`;
