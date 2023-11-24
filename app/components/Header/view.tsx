import { HeaderList } from "./list";
import * as S from "./Header.style";

export default function Header() {
  return (
    <S.Header>
      <S.Nav>
        {HeaderList.map(({ id, name, addr }) => {
          return (
            <S.Content key={id} href={addr}>
              {name}
            </S.Content>
          );
        })}
      </S.Nav>
    </S.Header>
  );
}
