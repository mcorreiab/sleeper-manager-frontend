import { waitFor } from "@testing-library/react";
import { renderHook } from "@testing-library/react";
import { SWRConfig } from "swr";
import axios from "@/config/axios";
import UserModel from "../model";
import useUser from "../index";

jest.mock("@/config/axios");
const mockedAxiosGet = axios.get as jest.MockedFunction<typeof axios.get>;

const username = "username";

it("should get data with success", async () => {
  const userModel: UserModel = {
    username: "username",
    avatar: "avatar",
    displayName: "displayName",
    userId: "userId",
  };

  const wrapper = ({ children }: { children: React.ReactNode }) => (
    <SWRConfig value={{ provider: () => new Map() }}>{children}</SWRConfig>
  );
  mockedAxiosGet.mockResolvedValueOnce({ data: { ...userModel } });

  const { result } = renderHook(() => useUser(username, true), { wrapper });

  await waitFor(() => {
    expect(result.current).toEqual({
      data: userModel,
      error: undefined,
      isLoading: false,
      usernameMissing: false,
    });
  });
});

it("should get loading state with success", async () => {
  const wrapper = ({ children }: { children: React.ElementType }) => (
    <SWRConfig value={{ provider: () => new Map() }}>{children}</SWRConfig>
  );

  mockedAxiosGet.mockResolvedValue({ data: undefined });

  const { result } = renderHook(() => useUser(username, true), { wrapper });

  await waitFor(() => {
    expect(result.current).toEqual({
      data: undefined,
      error: undefined,
      isLoading: true,
      usernameMissing: false,
    });
  });
});

it("should get username missing with success", async () => {
  const wrapper = ({ children }: { children: React.ElementType }) => (
    <SWRConfig value={{ provider: () => new Map() }}>{children}</SWRConfig>
  );

  mockedAxiosGet.mockResolvedValue({ data: null });

  const { result } = renderHook(() => useUser(username, true), { wrapper });

  await waitFor(() => {
    expect(result.current).toEqual({
      data: null,
      error: undefined,
      isLoading: false,
      usernameMissing: true,
    });
  });
});

it("if the fetch flag is false should not call the api", async () => {
  mockedAxiosGet.mockReset();
  const { result } = renderHook(() => useUser(username, false));

  await waitFor(() => {
    expect(mockedAxiosGet).not.toBeCalled();

    expect(result.current).toEqual({
      data: undefined,
      error: undefined,
      isLoading: true,
      usernameMissing: false,
    });
  });
});
