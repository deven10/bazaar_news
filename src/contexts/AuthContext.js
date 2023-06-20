import React, { createContext, useEffect, useState } from "react";
import { ReactToastify } from "../utility/ReactToastify";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export const ContextAuth = createContext();

export const AuthContext = ({ children }) => {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  const [token, setToken] = useState(null);
  const [loggedInUser, setLoggedInUser] = useState(null);

  useEffect(() => {
    const loginToken = localStorage.getItem("token");
    if (loginToken) {
      setToken(loginToken);
    }

    const user = localStorage.getItem("user");
    if (user) {
      setLoggedInUser(JSON.parse(user));
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

      const result = await axios.post(`/api/auth/login`, data);

      if (result.status === 200) {
        localStorage.setItem("token", result.data.encodedToken);
        localStorage.setItem("user", JSON.stringify(result.data.foundUser));
        setToken(result.encodedToken);
        ReactToastify("Logged in Successfully", "success");
        clearState();
        navigate("/home");
      } else {
        ReactToastify("Something went wrong, Please try again!", "error");
      }
    } catch (error) {
      error?.response?.data?.errors?.map((e) => ReactToastify(e, "error"));
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

      const result = await axios.post(`/api/auth/login`, data);

      if (result.status === 200) {
        localStorage.setItem("token", result.data.encodedToken);
        localStorage.setItem("user", JSON.stringify(result.data.foundUser));
        setToken(result.encodedToken);
        ReactToastify("Logged in Successfully as Guest", "success");
        clearState();
        navigate("/home");
      } else {
        ReactToastify("Something went wrong, Please try again!", "error");
      }
    } catch (error) {
      error?.response?.data?.errors?.map((e) => ReactToastify(e, "error"));
    } finally {
      setIsSubmitting(false);
    }
  };

  const clearState = () => {
    setUser({ email: "", password: "" });
  };

  return (
    <ContextAuth.Provider
      value={{ user, setUser, checkUser, loginAsGuest, token, loggedInUser }}
    >
      {children}
    </ContextAuth.Provider>
  );
};
