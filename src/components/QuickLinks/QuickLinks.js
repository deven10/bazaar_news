import React from "react";
import { Link } from "react-router-dom";

import "./QuickLinks.css";

export const QuickLinks = () => {
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
    <div className="default-section-block quick-links">
      <div className="links-wrapper">
        <Link className="link" to="/home">
          <span>
            <i className="fa-solid fa-house"></i>
          </span>
          Home
        </Link>
        <Link className="link" to="/explore">
          <span>
            <i className="fa-solid fa-compass"></i>
          </span>
          Explore
        </Link>
        <Link className="link" to="/bookmark">
          <span>
            <i className="fa-solid fa-bookmark"></i>
          </span>
          Bookmark
        </Link>
      </div>
      {/* <AddPostButton /> */}
    </div>
  );
};
