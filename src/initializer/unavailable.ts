import { getRostersByUserId, getUserInformation } from "@/services/index";
import RosterModel from "@/services/roster/model";

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

const avatarBaseUrl = "https://sleepercdn.com/avatars/";

const getRosterAvatar = (roster: RosterModel): string =>
  roster.league.avatar
    ? `${avatarBaseUrl}${roster.league.avatar}`
    : "/sleeper-logo.png";

const getProps = async (user: string): Promise<Props> => {
  const userInformation = await getUserInformation(user);
  const rosters = await getRostersByUserId(userInformation.userId);
  const userAvatarUrl = `${avatarBaseUrl}${userInformation.avatar}`;

  const rosterProps: RosterProps[] = rosters.map((roster) => ({
    name: roster.league.name,
    size: roster.league.size,
    avatarUrl: getRosterAvatar(roster),
    type: roster.league.pointsByReception,
  }));

  return {
    avatarUrl: userAvatarUrl,
    rosters: rosterProps,
  };
};

export { getProps };
