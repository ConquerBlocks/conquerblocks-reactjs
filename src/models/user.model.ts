export interface User {
  id: number;
}

export const emptyUserState: User = {
  id: -1,
};

export interface RickAndMortiCharacter {
  name: string;
  gender: string;
  status: string;
}
