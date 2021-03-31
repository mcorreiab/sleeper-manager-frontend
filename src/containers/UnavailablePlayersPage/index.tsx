import React, { FunctionComponent } from "react";
import { useRouter } from "next/router";
import Header from "@/components/Header";
import { UserInformation, LeagueCard } from "./components";
import Carousel, { ContentProps } from "../Carousel";
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
  const carouselContent: ContentProps[] = rosters.map((roster) => ({
    key: roster.name,
    element: (
      <LeagueCard
        avatarUrl={roster.avatarUrl}
        name={roster.name}
        size={roster.size}
        type={roster.type}
      />
    ),
  }));

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <Header />
      </header>
      <main>
        <UserInformation avatarUrl={userAvatarUrl} username={user as string} />
        <Carousel content={carouselContent} />
      </main>
    </div>
  );
};

export default unavailablePlayersPage;
