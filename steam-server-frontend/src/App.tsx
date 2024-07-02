import { lazy, Suspense, useEffect } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import axios from "axios";
import { useAppDispatch, useAppSelector } from "./redux/hooks";
import { GuestRoutes } from "./components/Routes/GuestRoutes";
import { ProtectedRoutes } from "./components/Routes/ProtectedRoutes";
import NavBarVintage from "./components/NavBar/navbar-1/NavBarVintage";
import Dashboard from "./pages/Dashboard";
import NavBar2 from "./components/NavBar/navbar-2/NavBar2";
import SpinnerVorshim from "./components/Spinners/SpinnerVorshim";
import ResetPassword from "./components/Sign/ResetPsw/ResetPassword";
import { getUserLogin } from "./redux/actionCreators/actionUserLogin";
import Checkout from "./pages/Checkout";

// Utilizza React.lazy() per importare dinamicamente i componenti
const Home = lazy(() => import("./pages/Home"));
const Products = lazy(() => import("./pages/Products"));
const Product = lazy(() => import("./pages/Product"));
const Register = lazy(() => import("./components/Sign/Register/Register"));
const Login = lazy(() => import("./components/Sign/Login/Login"));

function App() {
  console.log("sono in APP");
  axios.defaults.withCredentials = true;
  axios.defaults.withXSRFToken = true;
  const dispatch = useAppDispatch();

  const { isLoading, user } = useAppSelector((state) => state.userLogin);

  useEffect(() => {
    const checkUser = async () => {
      await dispatch(getUserLogin());
    };
    // if (!user) {
    //   return;
    // }

    checkUser();
  }, [dispatch]);

  return (
    <>
      {isLoading ? (
        <div className="spinner-overlay">
          <SpinnerVorshim />
        </div>
      ) : (
        <BrowserRouter>
          <NavBar2 />
          <NavBarVintage />
          <div className="container marginNav">
            <Suspense
              fallback={
                <div className="spinner-overlay">
                  <SpinnerVorshim />
                </div>
              }
            >
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/products" element={<Products />} />
                <Route path="/products/:id" element={<Product />} />
                <Route path="/checkout/" element={<Checkout />} />
                <Route path="/custom-server/" element={<div>CUSTOM SERVER</div>} />
                <Route element={<ProtectedRoutes />}>
                  <Route path="/dashboard" element={<Dashboard />} />
                </Route>
                <Route element={<GuestRoutes />}>
                  <Route path="/register" element={<Register />} />
                  <Route path="/login" element={<Login />} />
                  <Route path="/password-reset/:token" element={<ResetPassword />} />
                </Route>
              </Routes>
            </Suspense>
          </div>

          <Footer />
        </BrowserRouter>
      )}
    </>
  );
}

export default App;
