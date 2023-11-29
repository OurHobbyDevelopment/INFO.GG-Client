import { useState } from "react";
import * as S from "./GotoBottomBtn.style";

export const GotoBottomBtn = () => {
  const [state, setState] = useState(true);
  const GotoBottom = () => {
    setState(false);
    window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
  };

  const GotoTop = () => {
    setState(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <>
      {state ? (
        <S.BottomBtn onClick={GotoBottom}>맨밑으로</S.BottomBtn>
      ) : (
        <S.BottomBtn onClick={GotoTop}>맨위로</S.BottomBtn>
      )}
    </>
  );
};
