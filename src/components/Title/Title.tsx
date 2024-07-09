import { ReactNode } from "react";
import "./Title.module.css";

interface Props {
  children: ReactNode;
}

export const Title = ({ children }: Props) => {
  const inlineStyle = { fontSize: "2rem" };

  return (
    <h1 className="title" style={inlineStyle}>
      {children}
    </h1>
  );
};
