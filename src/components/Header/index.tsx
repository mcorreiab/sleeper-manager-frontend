import React, { FunctionComponent } from "react";
import Link from "next/link";
import styles from "./index.module.css";

const Header: FunctionComponent = () => (
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
            <img src="/github-logo.svg" alt="github logo" />
          </a>
        </li>
        <li>
          <Link href="/about">
            <a href="/about">
              <img src="/info-circle.svg" alt="info circle" />
            </a>
          </Link>
        </li>
      </ul>
    </nav>
  </div>
);

export default Header;
