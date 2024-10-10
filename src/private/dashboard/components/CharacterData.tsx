import { useContext, useEffect } from "react";
import { Character } from "../models";
import { UserContext } from "../../../context";

interface Props {
  characterData: Character;
}
export const CharacterData = ({ characterData }: Props) => {
  const { setUser } = useContext(UserContext);

  useEffect(() => {
    setTimeout(() => {
      setUser({ id: 1 });
    }, 2000);
  }, [setUser]);

  return (
    <div>
      <h3>{characterData.name}</h3>
      <p>{characterData.gender}</p>
      <img src={characterData.image} alt={characterData.name} />
    </div>
  );
};
