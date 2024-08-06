import Link from "next/link";
import SearchBox from "./SearchBox";
import Menu from "./Menu";

export default function Header() {
  return (
    <header>
      <nav>
        <div className="flex items-center w-full justify-between p-2">
          <div>
            <label className="btn btn-ghost">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-5 h-5 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </label>

            <Link href={"/"} className="btn btn-ghost">
              Amazona
            </Link>
          </div>
          <SearchBox />
          <Menu />
        </div>
      </nav>
    </header>
  );
}
