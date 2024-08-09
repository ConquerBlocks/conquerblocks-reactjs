import { Route } from "react-router-dom";
import { Dashboard } from "./Dashboard";
import { RoutesWithNotFound } from "../../providers/RoutesWithNotFound";

export const DashboardRouter = () => {
  return (
    <RoutesWithNotFound>
      <Route path="/" element={<Dashboard />} />
    </RoutesWithNotFound>
  );
};
