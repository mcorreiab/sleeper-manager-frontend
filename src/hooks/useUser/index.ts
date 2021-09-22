import useSWR from "swr";
import UserModel from "./model";
import axios from "@/config/axios";

interface UserData {
  data: UserModel | null | undefined;
  error: unknown | undefined;
  isLoading: boolean;
  usernameMissing: boolean;
}

const fetcher = (url: string) =>
  axios.get<UserModel | null>(url).then((response) => response.data);

const useUser = (username: string, shouldFetch: boolean): UserData => {
  const { data, error } = useSWR(
    shouldFetch
      ? `https://api.sleeper.app/v1/user/${username.replace(" ", "")}`
      : null,
    fetcher
  );

  return {
    data,
    error,
    isLoading: data === undefined && !error,
    usernameMissing: data === null,
  };
};

export default useUser;
