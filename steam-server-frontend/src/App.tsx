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
function App() {
  axios.defaults.withCredentials = true;
  axios.defaults.withXSRFToken = true;
  const dispatch = useAppDispatch();

  const { user, isLoading, error } = useAppSelector((state) => state.userLogin);

  useEffect(() => {
    axios("/api/user")
      .then((res) =>
        dispatch({
          type: ActionType.LOGIN_SUCCESS,
          payload: res.data,
        })
      )
      .catch((err) => console.log(err));
  }, [dispatch]);

  return (
    <>
      <BrowserRouter>
        {/* <NavBarVintage/> */}
        <Navbar />
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />

          <Route path="/" element={<Home />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
