import { camelizeKeys } from "humps";
import axios from "@/config/axios";
import getUserInformation from "../index";
import response from "./userModelResponse.json";

jest.mock("@/config/axios");
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe("user service test", () => {
  it("should get user information with success", async () => {
    const username = "murilocorreia";
    const mockedGet = jest.fn();
    mockedGet.mockReturnValue({ data: camelizeKeys(response) });
    mockedAxios.get = mockedGet;

    const actual = await getUserInformation(username);

    expect(mockedGet).toBeCalledWith(
      `https://api.sleeper.app/v1/user/${username}`
    );
    expect(actual.avatar).toEqual("0b0c6764f4ca773e86260b43c1731dfe");
    expect(actual.userId).toEqual("303333123121229824");
    expect(actual.username).toEqual(username);
  });
});
