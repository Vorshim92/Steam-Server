import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "./styles.css";
import "swiper/css";
import "swiper/css/pagination";
import logo from "./logo.png";
import Spinner from "react-bootstrap/Spinner";
import image1 from "./1.svg";
import image2 from "./2.svg";
import image3 from "./3.svg";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { NavLink } from "react-router-dom";
import { userLogout } from "../../../redux/actionCreators/actionUserLogout";

const slides = [
  {
    name: "Development",
    image: image1,
    items: ["home", "products", "JavaScript", "React", "Vuejs", "Svelte", "Preact", "Qwik", "Solidjs"],
  },
  {
    name: "Design",
    image: image2,
    items: ["Figma", "Adobe XD", "Illustrator", "Fireworks", "InVision", "Draw.io", "Canva", "Visio", "Jitter"],
  },
  {
    name: "Deployment",
    image: image3,
    items: ["Netlify", "Vercel", "Heroku", "AWS", "GCP", "Azure", "Railway", "Jenkins", "CircleCI"],
  },
];

export const Navbar = () => {
  const { user, isLoading, error } = useAppSelector((state) => state.userLogin);
  const dispatch = useAppDispatch();

  const logout = () => {
    dispatch(userLogout());
  };

  return (
    <nav>
      <img src={logo} />
      <div className="nav-items">
        <a href="#">Portfolio</a>
        <div className="dropdown">
          <button>Skills</button>
          <div className="menu">
            <Swiper modules={[Pagination]} slidesPerView={1} pagination={{ clickable: true }}>
              {slides?.map((slide, index) => (
                <SwiperSlide key={index}>
                  <img src={slide.image} />
                  <div>
                    <h2>{slide.name}</h2>
                    <div className="links">
                      {slide.items?.map((item, index) => (
                        <NavLink className="nav-btn" to={`/${item}`} key={index}>
                          <span>{item}</span>
                        </NavLink>
                      ))}
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
        <a href="#">About</a>
        <a href="#">Contact</a>
      </div>
      <div className="text-white ms-auto">
        {isLoading ? (
          <Spinner animation="border" variant="primary" />
        ) : user ? (
          <>
            <span>{user.username}</span>
            <button className="nav-btn " onClick={logout}>
              Logout
            </button>
          </>
        ) : (
          <>
            <NavLink className="nav-btn" to="/login">
              Login
            </NavLink>
            <NavLink className="nav-btn" to="/register">
              Registrati
            </NavLink>
          </>
        )}
      </div>
    </nav>
  );
};
