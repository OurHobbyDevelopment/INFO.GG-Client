import styled, { keyframes } from "styled-components";

export const OpenBox = styled.div`
  position: fixed;
  bottom: 0;
  right: 45%;
  cursor: pointer;
`;

export const OpenBar = styled.div`
  background-color: #3e4357;
  width: 12rem;
  height: 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
  padding: 5px;
`;

export const Line = styled.p`
  background-color: white;
  width: 4rem;
  height: 1rem;
  margin-bottom: 5px;
`;
