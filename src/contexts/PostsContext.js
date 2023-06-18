import React, { useEffect, useState, createContext } from "react";
import axios from "axios";

import { ReactToastify } from "../utility/ReactToastify";

export const ContextPosts = createContext();

export const PostsContext = ({ children }) => {
  const [postsData, setPostsData] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [postContent, setPostContent] = useState("");

  const token = localStorage.getItem("token");

  // API call for Fetching Posts
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

  // API Call for Adding a new Post
  const AddPost = async (postContent) => {
    if (postContent === "") {
      ReactToastify("Please enter post content", "error");
    } else {
      if (isSubmitting) {
        return;
      }
      setIsSubmitting(true);
      try {
        const result = await axios.post(
          `/api/posts`,
          {
            postData: postContent,
          },
          {
            headers: {
              authorization: token,
            },
          }
        );

        if (result.status === 201) {
          setPostsData(result.data.posts);
          setPostContent("");
          ReactToastify("New Post Added Successfully", "success");
        }
      } catch (e) {
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  // API Call for Liking a Post

  // API Call for Disliking a Post

  return (
    <ContextPosts.Provider
      value={{ postsData, AddPost, postContent, setPostContent }}
    >
      {children}
    </ContextPosts.Provider>
  );
};
