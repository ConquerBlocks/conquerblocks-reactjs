import { ReactNode, createContext, useState } from "react";
import { User, emptyUserState } from "../models";

interface UserContextType {
  user: User;
  setUser: React.Dispatch<React.SetStateAction<User>>;
}

export const UserContext = createContext<UserContextType>({
  user: emptyUserState,
  setUser: () => { },
});

interface Params {
  children: ReactNode;
}

export const UserProvider = ({ children }: Params) => {
  const [user, setUser] = useState<User>({ id: 5 });

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};


