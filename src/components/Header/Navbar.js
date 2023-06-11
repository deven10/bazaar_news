import React from "react";
import { Link, useNavigate } from "react-router-dom";

import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MoreVertIcon from "@mui/icons-material/MoreVert";

import "./Navbar.css";

export const Navbar = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const ThreeDots = () => {
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
      // setCart([]);
      // setWishlist([]);
      navigate("/");
      // window.location.reload();
    };

    return (
      <>
        <div className="three-dots">
          <IconButton
            className="more-options"
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
              <Link className="profile-link" to="/profile">
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

  return (
    <div className="d-flex ai-center navbar">
      <div className="logo">Bazaar New's 📰</div>
      <div className="profile">
        <div className="theme-toggler">
          <label class="ui-switch">
            <input type="checkbox" />
            <div class="slider">
              <div class="circle"></div>
            </div>
          </label>
        </div>
        <div className="user-account">
          {token ? <ThreeDots /> : ""}
          {/* <ThreeDots /> */}
        </div>
      </div>
    </div>
  );
};
