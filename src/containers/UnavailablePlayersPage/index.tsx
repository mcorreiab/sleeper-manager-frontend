import React, { FunctionComponent } from "react";
import { useRouter } from "next/router";
import Header from "@/components/Header";
import { UserInformation, LeagueCard, PlayerCard } from "./components";
import Carousel, { FullContentProps } from "../Carousel";
import styles from "./index.module.css";

export interface PlayerProps {
  id: string;
  name: string;
  injuryStatus: string;
  position: string;
  team: string;
}

export interface RosterProps {
  name: string;
  size: number;
  avatarUrl: string;
  type: string;
  players: PlayerProps[];
}

export interface Props {
  userAvatarUrl: string;
  rosters: RosterProps[];
}

const unavailablePlayersPage: FunctionComponent<Props> = ({
  userAvatarUrl,
  rosters,
}) => {
  const router = useRouter();
  const { user } = router.query;
  const carouselContent: FullContentProps[] = rosters.map((roster) => ({
    primaryContent: {
      key: roster.name,
      element: (
        <LeagueCard
          avatarUrl={roster.avatarUrl}
          name={roster.name}
          size={roster.size}
          type={roster.type}
        />
      ),
    },
    secondaryContent: {
      key: `${roster.name} roster`,
      element: roster.players.map((player) => (
        <PlayerCard
          key={player.id}
          name={player.name}
          injuryStatus={player.injuryStatus}
          position={player.position}
          team={player.team}
        />
      )),
    },
  }));

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <Header />
      </header>
      <main>
        <section>
          <UserInformation
            avatarUrl={userAvatarUrl}
            username={user as string}
          />
        </section>
        <section>
          <Carousel content={carouselContent} />
        </section>
      </main>
    </div>
  );
};

export default unavailablePlayersPage;
