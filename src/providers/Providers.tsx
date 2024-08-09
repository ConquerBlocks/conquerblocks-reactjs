import { ReactNode } from "react";
import { UserProvider } from "../context";

interface Props {
  children: ReactNode;
}
export const Providers = ({ children }: Props) => {
  return <UserProvider>{children}</UserProvider>;
};
