import React, { useState } from "react";
import { Link } from "react-router-dom";

export const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="main-form-page">
      <form className="form">
        <h2>Login</h2>
        <div className="form-group">
          <label htmlFor="email" className="form-label">
            Email address
          </label>
          <input
            id="email"
            className="form-input"
            type="email"
            required
            // value={user.email}
            // onChange={handleChange}
            placeholder="Enter your Email address..."
          />
        </div>
        <div className="form-group">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <div className="password-field">
            <input
              id="password"
              // value={user.password}
              // onChange={handleChange}
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
          // onClick={(e) => {
          //   e.preventDefault();
          //   handleSubmit("not guest");
          // }}
        >
          Login
        </button>
        <button
          className="form-button"
          // onClick={(e) => {
          //   e.preventDefault();
          //   handleSubmit("guest");
          // }}
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
