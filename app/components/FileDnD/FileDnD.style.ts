import styled from "styled-components";

export const Container = styled.div`
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

export const PreviewLabel = styled.label`
  width: 300px;
  height: 200px;
  margin: auto;
  background-color: #fff;
  border-radius: 5px;
  border: 3px dashed #eee;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  &:hover {
    border-color: #111;
    opacity: 0.8;
  }
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
