import { Character } from "../models";

interface Props {
  characterData: Character;
}
export const CharacterData = ({ characterData }: Props) => {
  return (
    <div>
      <h3>{characterData.name}</h3>
      <p>{characterData.gender}</p>
      <img src={characterData.image} alt={characterData.name} />
    </div>
  );
};
