import React, { createContext, useEffect, useState } from "react";
import { ReactToastify } from "../utility/ReactToastify";
import { useNavigate } from "react-router-dom";

export const ContextAuth = createContext();

export const AuthContext = ({ children }) => {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  const [token, setToken] = useState(null);

  useEffect(() => {
    const loginToken = localStorage.getItem("token");
    if (loginToken) {
      setToken(loginToken);
    }
  }, []);

  const checkUser = async () => {
    if (isSubmitting) {
      return;
    }
    setIsSubmitting(true);
    try {
      const data = {
        username: user.username,
        password: user.password,
      };

      const response = await fetch("/api/auth/login", {
        method: "POST",
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.status === 200) {
        localStorage.setItem("token", result.encodedToken);
        localStorage.setItem("user", JSON.stringify(result.foundUser));
        setToken(result.encodedToken);
        ReactToastify("Logged in Successfully", "success");
        clearState();
        navigate("/home");
      } else {
        if (result.errors) {
          result.errors.map((e) => ReactToastify(e, "error"));
        } else {
          ReactToastify(
            "Something went wrong, please try again later!",
            "error"
          );
        }
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const loginAsGuest = async () => {
    if (isSubmitting) {
      return;
    }
    setIsSubmitting(true);
    try {
      const data = {
        username: "adarshbalika",
        password: "adarshBalika123",
      };

      const response = await fetch("/api/auth/login", {
        method: "POST",
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.status === 200) {
        localStorage.setItem("token", result.encodedToken);
        localStorage.setItem("user", JSON.stringify(result.foundUser));
        setToken(result.encodedToken);
        ReactToastify("Logged in Successfully as Guest", "success");
        clearState();
        navigate("/home");
      } else {
        if (result.errors) {
          result.errors.map((e) => ReactToastify(e, "error"));
        } else {
          ReactToastify(
            "Something went wrong, please try again later!",
            "error"
          );
        }
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const clearState = () => {
    setUser({ email: "", password: "" });
  };

  return (
    <ContextAuth.Provider
      value={{ user, setUser, checkUser, loginAsGuest, token }}
    >
      {children}
    </ContextAuth.Provider>
  );
};
