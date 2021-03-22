import axios from "@/config/axios";
import UserModel from "./model";

const getUserInformation = async (username: string): Promise<UserModel> => {
  const response = await axios.get<UserModel>(
    `https://api.sleeper.app/v1/user/${username}`
  );
  return response.data;
};

export default getUserInformation;
