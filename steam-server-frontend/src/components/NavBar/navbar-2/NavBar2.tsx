import React from "react";
import { Link } from "react-router-dom";
import "./navbar2.scss";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { userLogout } from "../../../redux/actionCreators/actionUserLogout";

const NavBar2 = () => {
  const { user, isLoading, error } = useAppSelector((state) => state.userLogin);
  const dispatch = useAppDispatch();

  const logout = () => {
    dispatch(userLogout());
  };

  return (
    <>
      <nav className="menu">
        <ol>
          <li className="menu-item">
            <Link to="/">Home</Link>
          </li>
          <li className="menu-item">
            <Link to="/products">Prodotti</Link>
          </li>
          <li className="menu-item">
            <Link to="/">Widgets</Link>
            <ol className="sub-menu">
              <li className="menu-item">
                <Link to="/">Big Widgets</Link>
              </li>
              <li className="menu-item">
                <Link to="/">Bigger Widgets</Link>
              </li>
              <li className="menu-item">
                <Link to="/">Huge Widgets</Link>
              </li>
            </ol>
          </li>
          <li className="menu-item">
            <Link to="/">Kabobs</Link>
            <ol className="sub-menu">
              <li className="menu-item">
                <Link to="/">Shishkabobs</Link>
              </li>
              <li className="menu-item">
                <Link to="/">BBQ kabobs</Link>
              </li>
              <li className="menu-item">
                <Link to="/">Summer kabobs</Link>
              </li>
            </ol>
          </li>

          {user ? (
            <>
              <li className="menu-item">
                <Link to="/dashboard">
                  <img className="user-avatar" src={user.avatar || "https://server.nitrado.net/users.nitrado/10576024.jpg"} alt="" />
                  {user.username}
                </Link>
                <ol className="sub-menu">
                  <li className="menu-item">
                    <Link to="/myprofile">Mio Profilo</Link>
                  </li>
                  <li className="menu-item">
                    <Link to="/login" onClick={logout}>
                      Logout
                    </Link>
                  </li>
                </ol>
              </li>
            </>
          ) : (
            <>
              <li className="menu-item">
                <Link to="/dashboard">Profile</Link>
                <ol className="sub-menu">
                  <li className="menu-item">
                    <Link to="/login">Login</Link>
                  </li>
                  <li className="menu-item">
                    <Link to="/register">Registrati</Link>
                  </li>
                </ol>
              </li>
            </>
          )}
        </ol>
      </nav>
    </>
  );
};
export default NavBar2;
