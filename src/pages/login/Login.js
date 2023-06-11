import React, { useState, useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

import { ReactToastify } from "../../utility/ReactToastify";
import { ContextAuth } from "../../contexts/AuthContext";

export const Login = () => {
  const { user, setUser, checkUser, loginAsGuest } = useContext(ContextAuth);

  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      navigate("/home");
    }
  }, []);

  const handleSubmit = (type) => {
    if (type === "not guest") {
      if (user.username !== "" && user.password !== "") {
        checkUser();
      } else {
        ReactToastify("Please enter your Login credentials", "error");
      }
    } else if (type === "guest") {
      loginAsGuest();
    }
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setUser((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  return (
    <div className="main-form-page">
      <form className="form animate__animated animate__fadeIn">
        <h2>Login</h2>
        <div className="form-group">
          <label htmlFor="username" className="form-label">
            Username
          </label>
          <input
            id="username"
            className="form-input"
            type="text"
            required
            value={user.username}
            onChange={handleChange}
            placeholder="Enter your username..."
          />
        </div>
        <div className="form-group">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <div className="password-field">
            <input
              id="password"
              value={user.password}
              onChange={handleChange}
              className="form-input"
              required
              type={`${showPassword ? "text" : "password"}`}
              placeholder="Enter your Password..."
            />
            {showPassword ? (
              <i
                onClick={() => setShowPassword(!showPassword)}
                className="fa-regular fa-eye-slash password-icon"
              ></i>
            ) : (
              <i
                onClick={() => setShowPassword(!showPassword)}
                className="fa-regular fa-eye password-icon"
              ></i>
            )}
          </div>
        </div>
        <div className="form-check">
          <div className="checkbox-div">
            <input type="checkbox" className="checkbox-input" id="rememberMe" />
            <label htmlFor="rememberMe" className="form-label">
              Remember me
            </label>
          </div>
          <div>
            <Link to="/login" className="form-label forgot-password-link">
              Forgot Password?
            </Link>
          </div>
        </div>

        <button
          className="form-button"
          onClick={(e) => {
            e.preventDefault();
            handleSubmit("not guest");
          }}
        >
          Login
        </button>
        <button
          className="form-button"
          onClick={(e) => {
            e.preventDefault();
            handleSubmit("guest");
          }}
        >
          Login as Guest
        </button>
        <Link to="/register" className="form-toggle-link">
          Create New Account?
        </Link>
      </form>
    </div>
  );
};
