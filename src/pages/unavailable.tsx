import { GetServerSideProps } from "next";
import React, { FunctionComponent } from "react";
import UnavailablePlayersPage from "../containers/UnavailablePlayersPage";
import getUserInformation from "../services/user";

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

const unavailable: FunctionComponent<Props> = ({ avatarUrl, rosters }) => (
  <UnavailablePlayersPage avatarUrl={avatarUrl} rosters={rosters} />
);

const getLeagueInfo = () => [
  {
    id: "14",
    ownerId: "303333123121229824",
    players: [
      {
        id: "6945",
        name: "Antonio Gibson",
        injuryStatus: "Out",
        starter: true,
      },
    ],
    league: {
      name: "BFF - LIGA 8",
      id: "599686504830263296",
      size: 16,
      avatar: "b5f980efc36001cb4e056a9e146d0ca0",
      type: "Standard",
    },
  },
  {
    id: "3",
    ownerId: "303333123121229824",
    players: [
      {
        id: "6945",
        name: "Antonio Gibson",
        injuryStatus: "Out",
        starter: true,
      },
    ],
    league: {
      name: "Redraft - Profootball ",
      id: "586008784674004992",
      size: 12,
    },
  },
  {
    id: "2",
    ownerId: "303333123121229824",
    players: [
      {
        id: "5284",
        name: "Jeffery Wilson",
        injuryStatus: "Questionable",
        starter: true,
      },
    ],
    league: {
      name: "Rookie's League",
      id: "540622612055482368",
      size: 14,
    },
  },
  {
    id: "6",
    ownerId: "303333123121229824",
    players: [
      {
        id: "2449",
        name: "Stefon Diggs",
        injuryStatus: "Questionable",
        starter: true,
      },
      {
        id: "3164",
        name: "Ezekiel Elliott",
        injuryStatus: "Out",
        starter: true,
      },
    ],
    league: {
      name: "SuperFlex Fantasy",
      id: "516367724713119744",
      size: 12,
    },
  },
];

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const user = query.user as string;
  const userInformation = await getUserInformation(user);
  const { league } = getLeagueInfo()[0];
  const userAvatarUrl = `https://sleepercdn.com/avatars/${userInformation.avatar}`;
  const leagueUrl = `https://sleepercdn.com/avatars/${league.avatar}`;
  const rosters = {
    ...league,
    avatarUrl: leagueUrl,
  };

  return { props: { avatarUrl: userAvatarUrl, rosters } };
};

export default unavailable;
