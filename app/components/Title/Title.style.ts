import styled, { css } from "styled-components";

export const TitleBox = styled.div<{ data: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 15vh;

  ${({ data }) =>
    data
      ? null
      : css`
          display: none;
        `}
`;
