import axios from "@/config/axios";
import UserModel from "./model";

const getUserInformation = async (
  username: string
): Promise<UserModel | null> => {
  const response = await axios.get<UserModel>(
    `https://api.sleeper.app/v1/user/${username.replace(" ", "")}`
  );
  return response.data;
};

export default getUserInformation;
