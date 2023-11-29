import { useState } from "react";
import * as S from "./GotoBottomBtn.style";

export const GotoBottomBtn = () => {
  const [isAtTop, setIsAtTop] = useState(true);

  const scrollTo = () => {
    if (isAtTop) {
      window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
    setIsAtTop(!isAtTop);
  };

  return (
    <S.BottomBtn onClick={scrollTo}>
      {isAtTop ? "맨밑으로" : "맨위로"}
    </S.BottomBtn>
  );
};
