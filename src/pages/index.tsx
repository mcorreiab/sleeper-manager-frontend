import React from "react";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import styles from "./index.module.css";

const home = () => (
  <div className={styles.container}>
    <header className={styles.header}>
      <h1 className={styles.menuTitle}>Sleeper Manager</h1>
      <nav className={styles.navigation}>
        <ul className={styles.navigationList}>
          <li>
            <a href="https://github.com/mcorreiab/sleeper-manager">
              <FontAwesomeIcon
                icon={faGithub}
                size="lg"
                data-testid="github-icon"
              />
            </a>
          </li>
          <li>
            <Link href="/about">
              <button type="button">
                <FontAwesomeIcon
                  icon={faInfoCircle}
                  size="lg"
                  data-testid="info"
                />
              </button>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
    <main className={styles.content}>
      <div className={styles.titleArea}>
        <h2 className={styles.title} data-testid="page-title">
          Tool to easy your life at <span>sleeper</span> fantasy platform
        </h2>
        <p className={styles.description}>
          Insert your username to check all players with non ok injury status
        </p>
      </div>
      <img
        className={styles.illustration}
        src="/ball-and-helmet.svg"
        alt="Helmet and ball"
      />
      <div className={styles.inputArea}>
        <input
          className={styles.inputUsername}
          placeholder="Insert your username here"
        />
        <input className={styles.button} type="submit" value="GO" />
      </div>
    </main>
  </div>
);

export default home;
