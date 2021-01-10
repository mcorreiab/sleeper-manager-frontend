import React, { FunctionComponent, ReactNode } from "react";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import styles from "./index.module.css";

interface Props {
  children?: ReactNode;
}

const withHeader: FunctionComponent<Props> = ({ children }) => (
  <div className={styles.container}>
    <header className={styles.header}>
      <h1 className={styles.menuTitle}>Sleeper Manager</h1>
      <nav className={styles.navigation}>
        <ul className={styles.navigationList}>
          <li>
            <a
              href="https://github.com/mcorreiab/sleeper-manager"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon
                icon={faGithub}
                size="lg"
                data-testid="github-icon"
              />
            </a>
          </li>
          <li>
            <Link href="/about">
              <a href="/about">
                <FontAwesomeIcon
                  icon={faInfoCircle}
                  size="lg"
                  data-testid="info"
                />
              </a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
    {children}
  </div>
);

export default withHeader;
