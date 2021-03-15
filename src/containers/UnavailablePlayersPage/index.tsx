import React, { FunctionComponent } from "react";
import { useRouter } from "next/router";
import Header from "../../components/Header";
import UserInformation from "./components/UserInformation";
import LeaguesCarousel from "../Carousel";
import styles from "./index.module.css";

interface RosterProps {
  name: string;
  size: number;
  avatarUrl: string;
  type: string;
}

interface Props {
  userAvatarUrl: string;
  rosters: RosterProps[];
}

const unavailablePlayersPage: FunctionComponent<Props> = ({
  userAvatarUrl,
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
        <UserInformation avatarUrl={userAvatarUrl} username={user as string} />
        <LeaguesCarousel rosters={rosters} />
      </main>
    </div>
  );
};

export default unavailablePlayersPage;
