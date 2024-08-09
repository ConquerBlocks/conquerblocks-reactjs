import { ReactNode } from "react";
import { BrowserRouter, Navigate, Route } from "react-router-dom";
import { RoutesWithNotFound } from "./providers/RoutesWithNotFound";
import { PrivateRouter } from "./private/Private.router";
import { About } from "./public/about/About";
import PrivateGuard from "./guards/PrivateGuard";
import { PrivateRoute } from "./models";

interface Props {
  children?: ReactNode;
}

export const AppRouter = ({ children }: Props) => {
  return (
    <BrowserRouter>
      <RoutesWithNotFound>
        <Route path="/" element={<Navigate to={PrivateRoute} />} />
        <Route path="/about" element={<About />} />
        <Route element={<PrivateGuard />}>
          <Route path={PrivateRoute + "/*"} element={<PrivateRouter />} />
        </Route>
      </RoutesWithNotFound>
      {children}
    </BrowserRouter>
  );
};
