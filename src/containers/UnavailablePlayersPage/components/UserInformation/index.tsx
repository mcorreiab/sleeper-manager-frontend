import React, { FunctionComponent } from "react";
import styles from "./index.module.css";

interface Props {
  username: string;
  avatarUrl: string;
}

const userInformation: FunctionComponent<Props> = ({ username, avatarUrl }) => (
  <div className={styles.userInformation}>
    <img className={styles.userAvatar} src={avatarUrl} alt="User avatar" />
    <span className={styles.username}>{username}</span>
  </div>
);

export default userInformation;
