import { Navigate, Outlet } from "react-router-dom";
import { useUserContext } from "../context";

const PrivateGuard = () => {
  const { user } = useUserContext();

  return user.id ? <Outlet /> : <Navigate to="/about" replace />;
};

export default PrivateGuard;
