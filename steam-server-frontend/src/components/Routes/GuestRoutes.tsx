import { useAppSelector } from "../../redux/hooks";
import { Navigate, Outlet } from "react-router-dom";

export const GuestRoutes = () => {
  const user = useAppSelector((state) => state.userLogin.user);
  console.log("sono in guest routes", user);
  return !user ? <Outlet /> : <Navigate to="/" />;
};
