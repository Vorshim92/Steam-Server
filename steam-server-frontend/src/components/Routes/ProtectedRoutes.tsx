import { useAppSelector } from "../../redux/hooks";
import { Navigate, Outlet } from "react-router-dom";

export const ProtectedRoutes = () => {
  const user = useAppSelector((state) => state.userLogin.user);

  return user ? <Outlet /> : <Navigate to="/login" />;
};
