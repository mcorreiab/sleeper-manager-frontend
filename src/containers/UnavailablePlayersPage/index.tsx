import React, { FunctionComponent } from "react";
import { useRouter } from "next/router";
import Header from "../../components/Header";
import UserInformation from "./components/UserInformation";
import LeaguesCarousel from "./components/LeaguesCarousel";
import styles from "./index.module.css";

interface RosterProps {
  name: string;
  size: number;
  avatarUrl: string;
  type: string;
}

interface Props {
  avatarUrl: string;
  rosters: RosterProps;
}

const unavailablePlayersPage: FunctionComponent<Props> = ({
  avatarUrl,
  rosters,
}) => {
  const router = useRouter();
  const { user } = router.query;
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <Header />
      </header>
      <main>
        <UserInformation avatarUrl={avatarUrl} username={user as string} />
        <LeaguesCarousel
          name={rosters.name}
          avatarUrl={rosters.avatarUrl}
          size={rosters.size}
          type={rosters.type}
        />
      </main>
    </div>
  );
};

export default unavailablePlayersPage;
