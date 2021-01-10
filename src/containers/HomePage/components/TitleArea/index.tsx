import React, { FunctionComponent } from "react";
import styles from "./index.module.css";

interface Props {
  className: string;
}

const titleArea: FunctionComponent<Props> = ({ className }) => (
  <div className={className}>
    <h2 className={styles.title} data-testid="page-title">
      Tool to easy your life at <span>sleeper</span> fantasy platform
    </h2>
    <p className={styles.description}>
      Insert your username to check all players with non ok injury status
    </p>
  </div>
);

export default titleArea;
