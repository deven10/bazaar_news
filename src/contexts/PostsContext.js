import React, { useEffect, useState, createContext } from "react";
import axios from "axios";

import { ReactToastify } from "../utility/ReactToastify";

export const ContextPosts = createContext();

export const PostsContext = ({ children }) => {
  const [postsData, setPostsData] = useState([]);

  const fetchPosts = async () => {
    try {
      const result = await axios.get(`/api/posts`);
      if (result.status === 200) {
        setPostsData(result.data.posts);
      } else {
        setPostsData([]);
      }
    } catch (error) {
      console.log("err = ", error);
      error?.response?.data?.errors?.map((e) => ReactToastify(e, "error"));
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <ContextPosts.Provider value={{ postsData }}>
      {children}
    </ContextPosts.Provider>
  );
};
