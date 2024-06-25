import React from "react";
import { FaHome, FaTh, FaHeadset, FaUserCircle, FaNewspaper, FaPhotoVideo } from "react-icons/fa";
import { FaCalendarAlt } from "react-icons/fa";
import "./styles.css";
import { Link } from "react-router-dom";

const NavBarVintage = () => {
  return (
    <>
      <div id="navContainer" className="vh-100 d-flex align-items-center position-fixed start-0 top-0" role="navigation">
        <div className="p-2">
          <div id="mainNav">
            <ul className="list-unstyled rounded ms-2 nav-ul">
              <li>
                <Link className="vlink rounded border-0" to={"/"}>
                  <FaHome /> <span>Home</span>
                </Link>
              </li>
              <li>
                <Link className="vlink rounded" to={"/products"}>
                  <FaTh /> <span>Products</span>
                </Link>
              </li>
              <li>
                <Link className="vlink rounded" to={"/dashboard"}>
                  <FaUserCircle /> <span>Dashboard</span>
                </Link>
              </li>
              <li>
                <Link className="vlink rounded" to={"/"}>
                  <FaCalendarAlt /> <span>Schedule</span>
                </Link>
              </li>
              <li>
                <Link className="vlink rounded" to={"/"}>
                  <FaHeadset /> <span>About Us</span>
                </Link>
              </li>
              <li>
                <Link className="vlink rounded" to={"/"}>
                  <FaNewspaper /> <span>News</span>
                </Link>
              </li>
              <li>
                <Link className="vlink rounded" to={"/"}>
                  <FaPhotoVideo /> <span>Gallery</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};
export default NavBarVintage;
