import { HeaderList } from "./list";

export default function Header() {
  return (
    <>
      {HeaderList.map(({ id, name, addr }) => {
        return (
          <a key={id} href={addr}>
            {name}
          </a>
        );
      })}
    </>
  );
}
