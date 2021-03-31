import getProps from "../unavailable";
import { getRostersByUserId, getUserInformation } from "../../services";

jest.mock("../../services", () => ({
  getRostersByUserId: jest.fn(),
  getUserInformation: jest.fn(),
}));

const mockedGetRostersByUserId = getRostersByUserId as jest.Mock;
const mockedGetUserInformation = getUserInformation as jest.Mock;

const userInformation = {
  userId: "userId",
  avatar: "avatar",
};

const player = {
  id: "playerId",
  name: "playerName",
  injuryStatus: "injuryStatus",
  position: "position",
  team: "team",
};

const roster = {
  league: {
    name: "name",
    size: 10,
    pointsByReception: "Half PPR",
    avatar: "leagueAvatar",
  },
  players: [player],
};

const createExpectedRoster = (avatar: string) => ({
  name: roster.league.name,
  size: roster.league.size,
  avatarUrl: avatar,
  type: roster.league.pointsByReception,
  players: [
    {
      id: player.id,
      name: player.name,
      injuryStatus: player.injuryStatus,
      position: player.position,
      team: player.team,
    },
  ],
});

describe("Unavailable initializer", () => {
  describe("getProps", () => {
    it("should get roster props with success", async () => {
      mockedGetUserInformation.mockReturnValue(userInformation);
      mockedGetRostersByUserId.mockReturnValue([roster]);

      const actual = await getProps("user");

      const expectedRoster = createExpectedRoster(
        `https://sleepercdn.com/avatars/${roster.league.avatar}`
      );

      expect(actual.userAvatarUrl).toEqual(
        `https://sleepercdn.com/avatars/${userInformation.avatar}`
      );
      expect(actual.rosters[0]).toEqual(expectedRoster);
    });

    it("if avatar league is missing should use the default sleeper image", async () => {
      const rosterWithoutAvatar = Object.create(roster);
      rosterWithoutAvatar.league.avatar = undefined;
      mockedGetUserInformation.mockReturnValue(userInformation);
      mockedGetRostersByUserId.mockReturnValue([rosterWithoutAvatar]);

      const actual = await getProps("user");

      const expectedRoster = createExpectedRoster("/sleeper-logo.png");

      expect(actual.userAvatarUrl).toEqual(
        `https://sleepercdn.com/avatars/${userInformation.avatar}`
      );
      expect(actual.rosters[0]).toEqual(expectedRoster);
    });
  });
});
