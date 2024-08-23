import { RickAndMortiCharacter } from "../models";
import { axiosService } from "./axios.service";
import { loadAbort } from "../utilities";

const BASE_URL = "https://rickandmortyapi.com/api"

const axiosInstance = axiosService.getAxiosInstance()


export const getMorty = () => {
  const controller = loadAbort();
  return { call: axiosInstance.get<RickAndMortiCharacter>(`${BASE_URL}/character/2`, { signal: controller.signal }), controller };
}

export const getRick = () => {
  const controller = loadAbort();
  return { call: axiosInstance.get<RickAndMortiCharacter>(`${BASE_URL}/character/1`, { signal: controller.signal }), controller };
}
