import axios, { AxiosResponse } from "axios";
import { camelizeKeys } from "humps";

const appAxios = axios.create();

appAxios.interceptors.response.use((value: AxiosResponse) => {
  const response = value;
  response.data = camelizeKeys(value.data);
  return response;
});
appAxios.defaults.timeout = 10000;

export default appAxios;
