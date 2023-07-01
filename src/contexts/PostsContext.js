import React, { useEffect, useState, createContext } from "react";
import axios from "axios";

import { ReactToastify } from "../utility/ReactToastify";

export const ContextPosts = createContext();

export const PostsContext = ({ children }) => {
  const [postsData, setPostsData] = useState([]); // all posts state
  const [bookmarkPosts, setBookmarkPosts] = useState([]); // bookmark posts of logged in user
  const [postContent, setPostContent] = useState(""); // to store post msg while adding a new post

  // helper states
  // this state restricts user from clicking multiple times a button
  const [isSubmitting, setIsSubmitting] = useState(false);

  const token = localStorage.getItem("token"); // login token

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

  // API call for Fetching Bookmark posts of the logged in user
  const fetchBookmarkPosts = async () => {
    try {
      const result = await axios.get(`/api/users/bookmark`, {
        headers: {
          authorization: token,
        },
      });
      if (result.status === 200) {
        setBookmarkPosts(result.data.bookmarks);
      }
    } catch (error) {
      error?.response?.data?.errors?.map((e) => ReactToastify(e, "error"));
    }
  };

  useEffect(() => {
    fetchBookmarkPosts();
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
        console.error(`Error: ${e}`);
        ReactToastify(`Error: ${e}`, "error");
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  // API Call for Liking a Post
  const LikePost = async (postId) => {
    if (isSubmitting) {
      return;
    }
    setIsSubmitting(true);
    try {
      const result = await axios.post(
        `/api/posts/like/${postId}`,
        {},
        {
          headers: {
            authorization: token,
          },
        }
      );
      if (result.status === 201) {
        setPostsData(result.data.posts);
      }
    } catch (e) {
      ReactToastify(`Error: ${e}`, "error");
    } finally {
      setIsSubmitting(false);
    }
  };

  // API Call for Disliking a Post
  const DislikePost = async (postId) => {
    if (isSubmitting) {
      return;
    }
    setIsSubmitting(true);
    try {
      const result = await axios.post(
        `/api/posts/dislike/${postId}`,
        {},
        {
          headers: {
            authorization: token,
          },
        }
      );
      if (result.status === 201) {
        setPostsData(result.data.posts);
      }
    } catch (e) {
      ReactToastify(`Error: ${e}`, "error");
    } finally {
      setIsSubmitting(false);
    }
  };

  // API call for adding a post to user bookmarks
  const BookmarkPost = async (postId) => {
    if (isSubmitting) {
      return;
    }
    setIsSubmitting(true);
    try {
      const result = await axios.post(
        `/api/users/bookmark/${postId}`,
        {},
        {
          headers: {
            authorization: token,
          },
        }
      );
      if (result.status === 200) {
        fetchBookmarkPosts();
        // setBookmarkPosts(result.data.posts);
      }
    } catch (e) {
      ReactToastify(`Error: ${e}`, "error");
    } finally {
      setIsSubmitting(false);
    }
  };

  // API call for removing a post from user bookmarks
  const RemoveBookmarkPost = async (postId) => {
    if (isSubmitting) {
      return;
    }
    setIsSubmitting(true);
    try {
      const result = await axios.post(
        `/api/users/remove-bookmark/${postId}`,
        {},
        {
          headers: {
            authorization: token,
          },
        }
      );
      if (result.status === 200) {
        fetchBookmarkPosts();
      }
    } catch (e) {
      console.log(e);
      ReactToastify(`Error: ${e}`, "error");
    } finally {
      setIsSubmitting(false);
    }
  };

  // API Call for Deleting a Post
  const handleDeletePost = async (postId) => {
    if (isSubmitting) {
      return;
    }
    setIsSubmitting(true);
    try {
      const result = await axios.delete(`/api/posts/${postId}`, {
        headers: {
          authorization: token,
        },
      });
      if (result.status === 201) {
        setPostsData(result.data.posts);
        ReactToastify("Post Deleted", "info");
      }
    } catch (e) {
      console.log(e);
      ReactToastify(`Error: ${e}`, "error");
    } finally {
      setIsSubmitting(false);
    }
  };

  // API Call for Editing a Post
  const handleEditPost = async (updatedPost) => {
    if (isSubmitting) {
      return;
    }
    setIsSubmitting(true);
    try {
      const result = await axios.post(
        `/api/posts/edit/${updatedPost._id}`,
        {
          postData: updatedPost,
        },
        {
          headers: {
            authorization: token,
          },
        }
      );
      if (result.status === 201) {
        setPostsData(result.data.posts);
        ReactToastify("Post Updated", "info");
      }
    } catch (e) {
      console.log(e);
      ReactToastify(`Error: ${e}`, "error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <ContextPosts.Provider
      value={{
        postsData,
        AddPost,
        postContent,
        setPostContent,
        LikePost,
        DislikePost,
        BookmarkPost,
        RemoveBookmarkPost,
        bookmarkPosts,
        handleDeletePost,
        handleEditPost,
        fetchPosts,
      }}
    >
      {children}
    </ContextPosts.Provider>
  );
};
