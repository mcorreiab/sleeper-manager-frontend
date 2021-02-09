import { camelizeKeys } from "humps";
import axios from "../../../config/axios";
import getRostersByUserId from "../index";
import response from "./rosterModelResponse.json";

jest.mock("../../../config/axios");
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe("roster service test", () => {
  it("should get rosters with success", async () => {
    const userId = "userId";
    const mockedGet = jest.fn();
    mockedGet.mockReturnValue({ data: camelizeKeys(response) });
    mockedAxios.get = mockedGet;

    const actual = await getRostersByUserId(userId);

    expect(actual.length).toEqual(5);
  });
});
