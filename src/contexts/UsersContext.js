import React, { useEffect, useState, createContext, useContext } from "react";
import axios from "axios";

import { ReactToastify } from "../utility/ReactToastify";
import { ContextPosts } from "./PostsContext";

export const ContextUsers = createContext();

export const UsersContext = ({ children }) => {
  const { fetchPosts } = useContext(ContextPosts);
  const [usersData, setUsersData] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const token = localStorage.getItem("token"); // login token

  // API Call for Getting all users data
  const fetchUsers = async () => {
    try {
      const result = await axios.get(`/api/users`);
      if (result.status === 200) {
        setUsersData(result.data.users);
        fetchPosts();
      } else {
        setUsersData([]);
      }
    } catch (error) {
      console.log("err = ", error);
      error?.response?.data?.errors?.map((e) => ReactToastify(e, "error"));
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  // API Call for Following a User
  const followUser = async (userId) => {
    if (isSubmitting) {
      return;
    }
    setIsSubmitting(true);
    try {
      const result = await axios.post(
        `/api/users/follow/${userId}`,
        {},
        {
          headers: {
            authorization: token,
          },
        }
      );
      if (result.status === 200) {
        fetchUsers();
      }
    } catch (error) {
      console.log("err = ", error);
      error?.response?.data?.errors?.map((e) => ReactToastify(e, "error"));
    } finally {
      setIsSubmitting(false);
    }
  };

  // API Call for Following a User
  const unfollowUser = async (userId) => {
    if (isSubmitting) {
      return;
    }
    setIsSubmitting(true);
    try {
      const result = await axios.post(
        `/api/users/unfollow/${userId}`,
        {},
        {
          headers: {
            authorization: token,
          },
        }
      );
      if (result.status === 200) {
        fetchUsers();
      }
    } catch (error) {
      console.log("err = ", error);
      error?.response?.data?.errors?.map((e) => ReactToastify(e, "error"));
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <ContextUsers.Provider
      value={{ usersData, fetchUsers, followUser, unfollowUser }}
    >
      {children}
    </ContextUsers.Provider>
  );
};
