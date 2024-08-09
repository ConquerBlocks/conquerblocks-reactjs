import { characterAdapter } from "../adapters";
import { CharacterApiResponse } from "../models";

export const GetCharacter = () => {
  return fetch("https://rickandmortyapi.com/api/character")
    .then((response) => response.json() as Promise<CharacterApiResponse>)
    .then((characterApiResponse) => characterAdapter(characterApiResponse));
};
