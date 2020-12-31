import React from "react";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./index.module.css";

const home = () => (
  <div className={styles.container}>
    <header className={styles.header}>
      <h1 className={styles.menuTitle}>Sleeper Manager</h1>
      <nav className={styles.navigation}>
        <ul className={styles.navigationList}>
          <li>
            <a href="#">
              <FontAwesomeIcon
                icon={faGithub}
                size="lg"
                data-testid="github-icon"
              />
            </a>
          </li>
          <li>
            <a href="#">
              <FontAwesomeIcon
                icon={faInfoCircle}
                size="lg"
                data-testid="info"
              />
            </a>
          </li>
        </ul>
      </nav>
    </header>
    <main className={styles.content}>
      <div>
        <h2 className={styles.title}>
          Tool to easy your life at <span>sleeper</span> fantasy platform
        </h2>
        <p className={styles.description}>
          Insert your username to check all players with non ok injury status
        </p>
      </div>
      <img src="/ball-and-helmet.svg" alt="Helmet and ball image" />
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
