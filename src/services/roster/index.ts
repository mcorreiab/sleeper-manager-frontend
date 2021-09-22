import axios from "axios";
import appAxios from "@/config/axios";
import { RosterModel } from "./model";

const getRostersByUserId = async (userId: string): Promise<RosterModel[]> => {
  try {
    const response = await appAxios.get<RosterModel[]>(
      `https://sleeper-manager-api.mcorreia.dev/rosters/user/userId/${userId}/unavailable`
    );
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      if (error.response?.status === 404) {
        return Promise.resolve([]);
      }
    }

    return Promise.reject(error);
  }
};

export default getRostersByUserId;
