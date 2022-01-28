import Link from "next/link";
import styles from "./index.module.css";
import GithubLogo from "./githubLogo";
import ProjectInfoIcon from "./projectInfoIcon";

const Header: React.FunctionComponent = () => (
  <div className={styles.header}>
    <h1 className={styles.menuTitle}>Sleeper Manager</h1>
    <nav className={styles.navigation}>
      <ul className={styles.navigationList}>
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
