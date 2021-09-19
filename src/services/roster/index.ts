import axios from "@/config/axios";
import { RosterModel } from "./model";

const getRostersByUserId = async (userId: string): Promise<RosterModel[]> => {
  try {
    const response = await axios.get<RosterModel[]>(
      `https://sleeper-manager-api.mcorreia.dev/rosters/user/userId/${userId}/unavailable`
    );
    return response.data;
  } catch (error: any) {
    if (error.response.status === 404) {
      return Promise.resolve([]);
    }

    throw error;
  }
};

export default getRostersByUserId;
