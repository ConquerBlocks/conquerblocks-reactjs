import { CharacterApiResponse } from "../models";

export const characterAdapter = (
  characterApiResponse: CharacterApiResponse,
) => [...characterApiResponse.results];
