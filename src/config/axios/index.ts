import axios, { AxiosResponse } from "axios";
import axiosRetry from "axios-retry";
import { camelizeKeys } from "humps";

const appAxios = axios.create();

appAxios.interceptors.response.use((value: AxiosResponse) => {
  const response = value;
  response.data = camelizeKeys(value.data);
  return response;
});
appAxios.defaults.timeout = 30000;

axiosRetry(appAxios, { retries: 2 });

export default appAxios;
