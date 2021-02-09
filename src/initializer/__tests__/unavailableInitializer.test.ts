import { getProps } from "../unavailable";
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

const roster = {
  league: {
    name: "name",
    size: 10,
    pointsByReception: "Half PPR",
    avatar: "leagueAvatar",
  },
};

describe("Unavailable initializer", () => {
  describe("getProps", () => {
    it("should get roster props with success", async () => {
      mockedGetUserInformation.mockReturnValue(userInformation);
      mockedGetRostersByUserId.mockReturnValue([roster]);

      const actual = await getProps("user");

      const expectedRoster = {
        name: roster.league.name,
        size: roster.league.size,
        avatarUrl: `https://sleepercdn.com/avatars/${roster.league.avatar}`,
        type: roster.league.pointsByReception,
      };

      expect(actual.avatarUrl).toEqual(
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

      const expectedRoster = {
        name: roster.league.name,
        size: roster.league.size,
        avatarUrl: `/sleeper-logo.png`,
        type: roster.league.pointsByReception,
      };

      expect(actual.avatarUrl).toEqual(
        `https://sleepercdn.com/avatars/${userInformation.avatar}`
      );
      expect(actual.rosters[0]).toEqual(expectedRoster);
    });
  });
});
