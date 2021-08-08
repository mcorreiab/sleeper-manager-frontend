import getProps from "../unavailable";
import { getRostersByUserId, getUserInformation } from "../../services";

jest.mock("../../services", () => ({
  getRostersByUserId: jest.fn(),
  getUserInformation: jest.fn(),
}));

const mockedGetRostersByUserId = getRostersByUserId as jest.MockedFunction<
  typeof getRostersByUserId
>;
const mockedGetUserInformation = getUserInformation as jest.MockedFunction<
  typeof getUserInformation
>;

const username = "username";

const userInformation = {
  userId: "userId",
  avatar: "avatar",
  username,
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
  id: "rosterId",
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

mockedGetUserInformation.mockReturnValue(Promise.resolve(userInformation));
mockedGetRostersByUserId.mockReturnValue(Promise.resolve([roster]));

describe("Unavailable initializer", () => {
  describe("getProps", () => {
    it("should get roster props with success", async () => {
      const actual = await getProps(username);

      const expectedRoster = createExpectedRoster(
        `https://sleepercdn.com/avatars/${roster.league.avatar}`
      );

      const expected = {
        userAvatarUrl: `https://sleepercdn.com/avatars/${userInformation.avatar}`,
        rosters: [expectedRoster],
      };

      expect(actual).toEqual(expected);
    });

    it("if avatar league is missing should use the default sleeper image", async () => {
      const rosterWithoutAvatar = Object.create(roster);
      rosterWithoutAvatar.league.avatar = undefined;

      const actual = await getProps("user");

      const expectedRoster = createExpectedRoster("/sleeper-logo.png");

      const expected = {
        userAvatarUrl: `https://sleepercdn.com/avatars/${userInformation.avatar}`,
        rosters: [expectedRoster],
      };

      expect(actual).toEqual(expected);
    });
  });
});
