import React, { useEffect, useState, createContext } from "react";
import axios from "axios";

import { ReactToastify } from "../utility/ReactToastify";

export const ContextUsers = createContext();

export const UsersContext = ({ children }) => {
  const [usersData, setUsersData] = useState([]);

  const fetchUsers = async () => {
    try {
      const result = await axios.get(`/api/users`);
      if (result.status === 200) {
        setUsersData(result.data.users);
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

  return (
    <ContextUsers.Provider value={{ usersData, fetchUsers }}>
      {children}
    </ContextUsers.Provider>
  );
};
