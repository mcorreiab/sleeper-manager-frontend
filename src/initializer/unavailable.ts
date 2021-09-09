import { getRostersByUserId, getUserInformation } from "@/services/index";
import RosterModel from "@/services/roster/model";
import { Props, RosterProps } from "@/containers/UnavailablePlayersPage";

const avatarBaseUrl = "https://sleepercdn.com/avatars/";

const getRosterAvatar = (roster: RosterModel): string =>
  roster.league.avatar
    ? `${avatarBaseUrl}${roster.league.avatar}`
    : "/sleeper-logo.png";

const getProps = async (user: string): Promise<Props> => {
  const userInformation = await getUserInformation(user);
  let rosters = [];
  try {
    rosters = await getRostersByUserId(userInformation.userId);
  } catch (error) {
    //
  }
  const userAvatarUrl = `${avatarBaseUrl}${userInformation.avatar}`;

  const rosterProps: RosterProps[] = rosters.map((roster) => ({
    name: roster.league.name,
    size: roster.league.size,
    avatarUrl: getRosterAvatar(roster),
    type: roster.league.pointsByReception,
    players: roster.players,
  }));

  return {
    userAvatarUrl,
    rosters: rosterProps,
  };
};

export default getProps;
