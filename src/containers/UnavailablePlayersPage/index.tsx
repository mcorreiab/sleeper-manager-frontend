import React, { FunctionComponent } from "react";
import { useRouter } from "next/router";
import WithHeader from "../../hoc/withHeader";
import styles from "./index.module.css";

interface Props {
  avatarUrl: string;
}

const unavailablePlayersPage: FunctionComponent<Props> = ({ avatarUrl }) => {
  const router = useRouter();
  const { user } = router.query;
  return (
    <WithHeader>
      <main>
        <div className={styles.userInformation}>
          <img
            className={styles.userAvatar}
            src={avatarUrl}
            alt="User avatar"
          />
          <span>{user} leagues</span>
        </div>
      </main>
    </WithHeader>
  );
};

export default unavailablePlayersPage;
