import React from "react";
import { FaHome, FaTh, FaHeadset, FaUserCircle, FaNewspaper, FaPhotoVideo } from "react-icons/fa";
import { FaCalendarAlt } from "react-icons/fa";
import "./styles.css";

const NavBarVintage = () => {
  return (
    <>
      <div id="navContainer" className="vh-100 d-flex align-items-center position-fixed start-0 top-0" role="navigation">
        <div className="p-2">
          <div id="mainNav">
            <ul className="list-unstyled rounded ms-2 nav-ul">
              <li>
                <a className="vlink rounded border-0" href="#">
                  <FaHome /> <span>Home</span>
                </a>
              </li>
              <li>
                <a className="vlink rounded" href="#">
                  <FaTh /> <span>Services</span>
                </a>
              </li>
              <li>
                <a className="vlink rounded" href="#">
                  <FaHeadset /> <span>Call Us</span>
                </a>
              </li>
              <li>
                <a className="vlink rounded" href="#">
                  <FaCalendarAlt /> <span>Schedule</span>
                </a>
              </li>
              <li>
                <a className="vlink rounded" href="#">
                  <FaUserCircle /> <span>About Us</span>
                </a>
              </li>
              <li>
                <a className="vlink rounded" href="#">
                  <FaNewspaper /> <span>News</span>
                </a>
              </li>
              <li>
                <a className="vlink rounded" href="#">
                  <FaPhotoVideo /> <span>Gallery</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};
export default NavBarVintage;
