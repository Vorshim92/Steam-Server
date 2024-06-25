import { useAppSelector } from "../../redux/hooks";
import { Navigate, Outlet, useLocation } from "react-router-dom";

export const GuestRoutes = () => {
  const user = useAppSelector((state) => state.userLogin.user);
  let location = useLocation();

  if (user) {
    const from = location.state?.from?.pathname || "/";
    return <Navigate to={from} replace />;
  }

  return <Outlet />;
};
