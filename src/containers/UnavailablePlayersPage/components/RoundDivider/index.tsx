import React, { FunctionComponent } from "react";
import styles from "./index.module.css";

const roundDivider: FunctionComponent = () => (
  <img src="/round-divider.svg" alt="Divider" className={styles.roundDivider} />
);

export default roundDivider;
