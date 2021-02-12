import React, { FunctionComponent, useState } from "react";
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
  userAvatarUrl: string;
  rosters: RosterProps[];
}

const unavailablePlayersPage: FunctionComponent<Props> = ({
  userAvatarUrl,
  rosters,
}) => {
  const router = useRouter();
  const { user } = router.query;
  const [selectedRosterIndex, setSelectedRosterIndex] = useState(0);

  const showNextLeagueCard = () => {
    const nextIndex = selectedRosterIndex + 1;
    if (nextIndex < rosters.length) {
      setSelectedRosterIndex(nextIndex);
    } else {
      setSelectedRosterIndex(0);
    }
  };

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <Header />
      </header>
      <main>
        <UserInformation avatarUrl={userAvatarUrl} username={user as string} />
        <LeaguesCarousel
          rosters={rosters}
          rosterIndex={selectedRosterIndex}
          clickOnRightArrow={showNextLeagueCard}
        />
      </main>
    </div>
  );
};

export default unavailablePlayersPage;
