import React, { lazy, Suspense, useEffect } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import { Navbar } from "./components/NavBar/navbar-4/NavBar";
import axios from "axios";
import { useAppDispatch, useAppSelector } from "./redux/hooks";
import { ActionType } from "./redux/actionTypes/actionTypeUser";
import { GuestRoutes } from "./components/Routes/GuestRoutes";
import { ProtectedRoutes } from "./components/Routes/ProtectedRoutes";
import { InfinitySpin } from "react-loader-spinner";

// Utilizza React.lazy() per importare dinamicamente i componenti
const Home = lazy(() => import("./pages/Home"));
const Products = lazy(() => import("./pages/Products"));
const Product = lazy(() => import("./pages/Product"));
const Register = lazy(() => import("./components/Sign/Register/Register"));
const Login = lazy(() => import("./components/Sign/Login/Login"));

function App() {
  axios.defaults.withCredentials = true;
  axios.defaults.withXSRFToken = true;
  const dispatch = useAppDispatch();

  const { isLoading, user } = useAppSelector((state) => state.userLogin);

  useEffect(() => {
    const checkUser = async () => {
      dispatch({
        type: ActionType.LOGIN_START,
      });

      try {
        const res = await axios("/api/user");
        dispatch({
          type: ActionType.LOGIN_SUCCESS,
          payload: res.data,
        });
      } catch (err) {
        dispatch({
          type: ActionType.LOGIN_FAILURE,
          payload: (err as Error).message,
        });
      }
    };

    if (user) {
      checkUser();
    }
  }, [dispatch]);

  return (
    <>
      {isLoading ? (
        <div className="spinner-overlay">
          <InfinitySpin width="400" color="#0077FF" />
        </div>
      ) : (
        <BrowserRouter>
          <Navbar />
          <Suspense fallback={<div>Loading...</div>}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/products" element={<Products />} />
              <Route path="/products/:id" element={<Product />} />
              <Route element={<ProtectedRoutes />}>
                <Route path="/dashboard" element={<div>Dashboard</div>} />
              </Route>
              <Route element={<GuestRoutes />}>
                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<Login />} />
              </Route>
            </Routes>
          </Suspense>
          <Footer />
        </BrowserRouter>
      )}
    </>
  );
}

export default App;
