import React, { useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

import "./LandingPage.css";

import landingPageImg from "../../images/landing-image.jpg";
import { ContextTheme } from "../../contexts/ThemeContext";

export const LandingPage = () => {
  const { themeToggler } = useContext(ContextTheme);
  const navigate = useNavigate();
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      navigate("/home");
    }
  }, []);

  return (
    <div className="full-page d-flex jc-center ai-center">
      <div className="half content">
        <h2
          style={{ color: themeToggler === "dark" ? "#C9C9C9" : "#212529" }}
          className="animate__animated animate__fadeInDown"
        >
          Welcome to Bazaar New's
        </h2>
        <div className="animate__animated animate__fadeInLeft">
          <p
            style={{ color: themeToggler === "dark" ? "#CFCFCF" : "#222222" }}
            className="p1"
          >
            Searching for something?
          </p>
          <p
            style={{ color: themeToggler === "dark" ? "#CFCFCF" : "#222222" }}
            className="p2"
          >
            We got you covered, we've got ample of news, about sports, about
            politics, about climate, and much more.
          </p>
        </div>
        <div className="animate__animated animate__fadeInUp links">
          <Link to="/register" className="join-now">
            Join Now
          </Link>
          <Link to="/login" className="already-a-user">
            Already a user?
          </Link>
        </div>
      </div>
      <div className="half landing-image">
        <img
          className="landing-page-image"
          src={landingPageImg}
          alt="landing Page"
        />
      </div>
    </div>
  );
};
