import styled, { css } from "styled-components";
export const Container = styled.label`
  align-items: center;

  display: flex;
`;

export const Icon = styled.svg`
  width: 100px;
  height: 100px;
  pointer-events: none;
`;

export const FileInput = styled.input`
  display: none;
`;

export const PreviewLabel = styled.label<{ state: boolean }>`
  width: 300px;
  height: 200px;
  margin: auto;
  border-radius: 5px;
  border: 3px dashed #eee;
  background-color: #fff;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  ${({ state }) =>
    state
      ? css`
          background-color: #efeef3;
          border-color: #111;
        `
      : null}
`;

export const PreviewMessage = styled.p`
  font-weight: 500;
  font-size: 16px;
  margin: 20px 0 10px;
`;

export const PreviewDescription = styled.p`
  margin: 0;
  font-size: 12px;
`;

export const ImagePreview = styled.img`
  width: 100%;
  height: 100%;
`;
