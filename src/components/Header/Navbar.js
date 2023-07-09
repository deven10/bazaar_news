import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { ContextTheme } from "../../contexts/ThemeContext";

import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MoreVertIcon from "@mui/icons-material/MoreVert";

import "./Navbar.css";

export const ThreeDots = () => {
  const { themeToggler } = useContext(ContextTheme);
  const loggedInUser = JSON.parse(localStorage.getItem("user"));
  const navigate = useNavigate();

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleSignOut = () => {
    localStorage.clear();
    navigate("/");
  };

  return (
    <>
      <div className="three-dots">
        <IconButton
          className={`more-options ${themeToggler === "dark" ? "dark" : ""}`}
          aria-label="more"
          id="long-button"
          aria-controls={open ? "long-menu" : undefined}
          aria-expanded={open ? "true" : undefined}
          aria-haspopup="true"
          onClick={handleClick}
        >
          <MoreVertIcon />
        </IconButton>
        <Menu
          id="long-menu"
          MenuListProps={{
            "aria-labelledby": "long-button",
          }}
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          // PaperProps={{
          //   style: {
          //     width: "",
          //   },
          // }}
        >
          <MenuItem onClick={handleClose}>
            <Link
              className="profile-link"
              to={`/user/${loggedInUser?.username}`}
            >
              Profile
            </Link>
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <button className="logout-button" onClick={handleSignOut}>
              Logout
            </button>
          </MenuItem>
        </Menu>
      </div>
    </>
  );
};

export const Navbar = () => {
  const token = localStorage.getItem("token");
  const { handleTheme, themeToggler } = useContext(ContextTheme);

  return (
    <div
      className={`d-flex ai-center navbar ${
        themeToggler === "dark" ? "dark" : ""
      }`}
    >
      <Link
        className={`logo ${themeToggler === "dark" ? "dark" : ""}`}
        to="/home"
      >
        Bazaar New's 📰
      </Link>
      <div className="profile">
        <div className="theme-toggler">
          <label className="ui-switch">
            <input
              type="checkbox"
              value={themeToggler}
              onChange={() => handleTheme()}
            />
            <div className="slider">
              <div className="circle"></div>
            </div>
          </label>
        </div>
        <div className="user-account">{token ? <ThreeDots /> : ""}</div>
      </div>
    </div>
  );
};
