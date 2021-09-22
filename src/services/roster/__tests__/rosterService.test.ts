import { camelizeKeys } from "humps";
import { AxiosError } from "axios";
import axios from "@/config/axios";
import getRostersByUserId from "../index";
import response from "./rosterModelResponse.json";

jest.mock("@/config/axios");
const mockedAxios = axios as jest.Mocked<typeof axios>;

const userId = "userId";
const mockedGet = jest.fn();
mockedAxios.get = mockedGet;

it("should get rosters with success", async () => {
  mockedGet.mockResolvedValue({ data: camelizeKeys(response) });

  const actual = await getRostersByUserId(userId);

  expect(actual.length).toEqual(5);
});

it("when return a 404 status code should return an empty list", async () => {
  const returnedError: Partial<AxiosError> = {
    isAxiosError: true,
    response: {
      data: null,
      status: 404,
      statusText: "404",
      headers: null,
      config: {},
    },
  };

  mockedGet.mockRejectedValue(returnedError);

  const actual = await getRostersByUserId(userId);

  expect(actual).toEqual([]);
});

it("when return other error should receive it", async () => {
  mockedGet.mockRejectedValue(Error());

  const actual = getRostersByUserId(userId);

  await expect(actual).rejects.toBeInstanceOf(Error);
});
