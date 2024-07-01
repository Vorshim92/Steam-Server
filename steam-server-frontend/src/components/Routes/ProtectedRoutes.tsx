import { useAppSelector } from "../../redux/hooks";
import { Navigate, Outlet } from "react-router-dom";
import { useLocation } from "react-router-dom";

export const ProtectedRoutes = () => {
  console.log("sono in protected");

  const user = useAppSelector((state) => state.userLogin.user);
  let location = useLocation();

  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return <Outlet />;
};
