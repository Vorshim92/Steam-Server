import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import { Navbar } from "./components/NavBar/navbar-4/NavBar";
import NavBarVintage from "./components/NavBar/navbar-1/NavBarVintage";
import { Register } from "./components/Sign/Register/Register";
import axios from "axios";
import { useAppDispatch, useAppSelector } from "./redux/hooks";
import Login from "./components/Sign/Login/Login";
import { ActionType } from "./redux/actionTypes/actionTypeUser";
import { useEffect } from "react";
import { GuestRoutes } from "./components/Routes/GuestRoutes";
import { ProtectedRoutes } from "./components/Routes/ProtectedRoutes";
function App() {
  axios.defaults.withCredentials = true;
  axios.defaults.withXSRFToken = true;
  const dispatch = useAppDispatch();

  const { isLoading } = useAppSelector((state) => state.userLogin);

  useEffect(() => {
    const fetchUser = async () => {
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

    fetchUser();
  }, [dispatch]);

  return (
    <>
      {!isLoading && (
        <BrowserRouter>
          {/* <NavBarVintage/> */}
          <Navbar />
          <Routes>
            {/* PER TUTTI */}
            <Route path="/" element={<Home />} />
            {/* PER CHI E' LOGGATO */}
            <Route element={<ProtectedRoutes />}>
              <Route path="/dashboard" />
            </Route>
            {/* PER CHI E' GUEST */}
            <Route element={<GuestRoutes />}>
              <Route path="/register" element={<Register />} />
              <Route path="/login" element={<Login />} />
            </Route>
          </Routes>
          <Footer />
        </BrowserRouter>
      )}
    </>
  );
}

export default App;
