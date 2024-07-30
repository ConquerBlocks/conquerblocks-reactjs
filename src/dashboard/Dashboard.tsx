import { useEffect, useState } from "react";
import { CharacterData } from "./components/CharacterData";
import { Character } from "./models";
import { GetCharacter } from "./services/character.service";
import { useUserContext } from "../context";

export function Dashboard() {
  const { user } = useUserContext();
  const [characters, setCharacters] = useState<Character[]>([]);

  const characterFetcher = async () => {
    const result = await GetCharacter();
    setCharacters(result);
  };

  useEffect(() => {
    characterFetcher();
  }, []);

  return (
    <div>
      <h2>Este es el id del usuario: {user.id}</h2>
      {characters.map((character, index) => (
        <CharacterData key={index} characterData={character} />
      ))}
    </div>
  );
}
