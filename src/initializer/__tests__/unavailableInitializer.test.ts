import { getProps } from "../unavailable";
import { getRostersByUserId, getUserInformation } from "../../services";

jest.mock("../../services", () => ({
  getRostersByUserId: jest.fn(),
  getUserInformation: jest.fn(),
}));

const mockedGetRostersByUserId = getRostersByUserId as jest.Mock;
const mockedGetUserInformation = getUserInformation as jest.Mock;

describe("Unavailable initializer", () => {
  describe("getProps", () => {
    it("should get roster props with success", async () => {
      const userInformation = {
        userId: "userId",
        avatar: "avatar",
      };

      const roster = {
        league: {
          name: "name",
          size: 10,
        },
      };
      const rostersList = [roster];

      mockedGetUserInformation.mockReturnValue(userInformation);
      mockedGetRostersByUserId.mockReturnValue(rostersList);

      const actual = await getProps("user");

      expect(actual.avatarUrl).toEqual(
        `https://sleepercdn.com/avatars/${userInformation.avatar}`
      );
      expect(actual.rosters[0].name).toEqual(roster.league.name);
      expect(actual.rosters[0].size).toEqual(roster.league.size);
    });
  });
});
