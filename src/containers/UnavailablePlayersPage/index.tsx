import { useCallback, useEffect, useState } from "react";
import getRoster from "@/services/roster";
import { RosterModel } from "@/services/roster/model";
import useUser from "@/hooks/useUser";
import { Loading } from "./components";
import RostersPage from "./rostersPage";

interface Props {
  username: string;
}

const avatarBaseUrl = "https://sleepercdn.com/avatars/";

const UnavailablePlayersPage: React.FunctionComponent<Props> = ({
  username,
}) => {
  const { data, isLoading } = useUser(username, true);
  const [rosters, setRosters] = useState<RosterModel[] | null>(null);

  const getRosterCallback = useCallback(async () => {
    if (!isLoading && data) {
      const rostersData = await getRoster(data.userId);
      setRosters(rostersData);
    }
  }, [data, isLoading]);

  useEffect(() => {
    getRosterCallback();
  }, [getRosterCallback]);

  if (data && rosters) {
    const userAvatarUrl =
      data && data.avatar
        ? `${avatarBaseUrl}${data.avatar}`
        : "/sleeper-logo.png";

    return (
      <RostersPage
        user={data.displayName}
        userAvatarUrl={userAvatarUrl}
        rosters={rosters.map((roster) => ({
          name: roster.league.name,
          size: roster.league.size,
          avatarUrl: getRosterAvatar(roster),
          players: roster.players,
        }))}
      />
    );
  }

  return (
    <main className="h-full">
      <Loading className="h-screen" />
    </main>
  );
};

function getRosterAvatar(roster: RosterModel): string {
  return roster.league.avatar
    ? `${avatarBaseUrl}${roster.league.avatar}`
    : "/sleeper-logo.png";
}

export default UnavailablePlayersPage;
