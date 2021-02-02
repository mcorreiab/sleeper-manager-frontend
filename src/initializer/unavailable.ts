import { getRostersByUserId, getUserInformation } from "../services";

interface RosterProps {
  name: string;
  size: number;
  avatarUrl: string;
  type: string;
}

export interface Props {
  avatarUrl: string;
  rosters: RosterProps[];
}

const getProps = async (user: string): Promise<Props> => {
  const userInformation = await getUserInformation(user);
  const rosters = await getRostersByUserId(userInformation.userId);
  const userAvatarUrl = `https://sleepercdn.com/avatars/${userInformation.avatar}`;
  const leagueUrl = `https://sleepercdn.com/avatars/${userInformation.avatar}`;

  const rosterProps: RosterProps[] = rosters.map((roster) => ({
    name: roster.league.name,
    size: roster.league.size,
    avatarUrl: leagueUrl,
    type: "Standard",
  }));

  return {
    avatarUrl: userAvatarUrl,
    rosters: rosterProps,
  };
};

export { getProps };
