import Link from "next/link";
import { AboutLogo, GithubLogo } from "../atoms";

const Navigation: React.FC = () => (
  <ul className="flex list-none m-0 p-0 justify-between">
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
          <AboutLogo />
        </a>
      </Link>
    </li>
  </ul>
);

export default Navigation;
