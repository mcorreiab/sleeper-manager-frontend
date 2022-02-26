import Link from "next/link";
import GithubLogo from "./githubLogo";
import ProjectInfoIcon from "./projectInfoIcon";

const Header: React.FunctionComponent = () => (
  <div className="flex items-center text-xl justify-between">
    <h1 className="text-[#fa7820] m-0 text-base">Sleeper Manager</h1>
    <nav className="basis-20">
      <ul className="flex list-none p-0 m-0 justify-between">
        <li>
          <a
            href="https://github.com/mcorreiab/sleeper-manager"
            target="_blank"
            rel="noreferrer"
          >
            <GithubLogo />
          </a>
        </li>
        <li>
          <Link href="/about">
            <a href="/about">
              <ProjectInfoIcon />
            </a>
          </Link>
        </li>
      </ul>
    </nav>
  </div>
);

export default Header;
