import React, { useContext } from "react";
import { Link } from "react-router-dom";

import { ContextTheme } from "../../contexts/ThemeContext";

import "./QuickLinks.css";

export const QuickLinks = () => {
  const { themeToggler } = useContext(ContextTheme);
  const AddPostButton = () => {
    return (
      <button type="button" className="addPost">
        <span className="button__text">Create New Post</span>
        <span className="button__icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            viewBox="0 0 24 24"
            strokeWidth="2"
            strokeLinejoin="round"
            strokeLinecap="round"
            stroke="currentColor"
            height="24"
            fill="none"
            className="svg"
          >
            <line y2="19" y1="5" x2="12" x1="12"></line>
            <line y2="12" y1="12" x2="19" x1="5"></line>
          </svg>
        </span>
      </button>
    );
  };

  return (
    <div
      className={`default-section-block ${
        themeToggler === "dark" ? "dark" : ""
      } quick-links`}
    >
      <div className="links-wrapper">
        <Link
          className={`link ${themeToggler === "dark" ? "dark" : ""}`}
          to="/home"
        >
          <span>
            <i className="fa-solid fa-house"></i>
          </span>
          <span className="quick-link">Home</span>
        </Link>
        <Link
          className={`link ${themeToggler === "dark" ? "dark" : ""}`}
          to="/explore"
        >
          <span>
            <i className="fa-solid fa-compass"></i>
          </span>
          <span className="quick-link">Explore</span>
        </Link>
        <Link
          className={`link ${themeToggler === "dark" ? "dark" : ""}`}
          to="/bookmark"
        >
          <span>
            <i className="fa-solid fa-bookmark"></i>
          </span>
          <span className="quick-link">Bookmark</span>
        </Link>
      </div>
    </div>
  );
};
