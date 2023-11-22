import Link from "next/link";
import { GlobalStyle } from "./styles/GlobalStyle";

export default function tests() {
  return (
    <div>
      <GlobalStyle />
      <button>
        <Link href="/pages/PlayerSearch">이동</Link>
      </button>
    </div>
  );
}
