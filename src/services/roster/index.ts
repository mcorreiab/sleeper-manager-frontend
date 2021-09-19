import axios from "@/config/axios";
import { RosterModel } from "./model";

const getRostersByUserId = async (userId: string): Promise<RosterModel[]> => {
  const response = await axios.get<RosterModel[]>(
    `https://sleeper-manager-api.mcorreia.dev/rosters/user/userId/${userId}/unavailable`
  );
  return response.data;
};

export default getRostersByUserId;
