import { useContext } from "react";
import { UserContext } from "./user.context";

export const useUserContext = () => {
  const context = useContext(UserContext);

  if (context.user.id === -1) {
    throw new Error("UserContext must be used within a UserProvider");
  }

  return context;
};
