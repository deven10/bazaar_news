import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { QuickLinks } from "../../components/QuickLinks/QuickLinks";
import { ContextUsers } from "../../contexts/UsersContext";
import { ContextPosts } from "../../contexts/PostsContext";
import { Navbar } from "../../components/Header/Navbar";
import { SuggestedUsers } from "../../components/SuggestedUsers/SuggestedUsers";

// Three Dots
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MoreVertIcon from "@mui/icons-material/MoreVert";

// MUI Modal
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";

import "./Home.css";

import deven from "../../images/deven.jpg";

// Three Dots
const ThreeDots = ({ post }) => {
  const { handleDeletePost } = useContext(ContextPosts);
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <div className="three-dots home-page">
        <IconButton
          className="more-options"
          aria-label="more"
          id="long-button"
          aria-controls={open ? "long-menu" : undefined}
          aria-expanded={open ? "true" : undefined}
          aria-haspopup="true"
          onClick={(event) => handleClick(event)}
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
        >
          <MenuItem>
            <BasicModal post={post} setAnchorEl={setAnchorEl} />
          </MenuItem>
          <MenuItem>
            <button
              className="delete-post-button"
              onClick={() => {
                handleDeletePost(post._id);
                handleClose();
              }}
            >
              DELETE
            </button>
          </MenuItem>
        </Menu>
      </div>
    </>
  );
};

// Post Edit Modal
const BasicModal = ({ setAnchorEl, post }) => {
  const { handleEditPost } = useContext(ContextPosts);
  const [open, setOpen] = React.useState(false);

  const [updatedPost, setUpdatedPost] = useState({});

  const handleOpen = () => {
    setOpen(true);
    setUpdatedPost(post);
  };
  const handleClose = () => {
    setOpen(false);
    setAnchorEl(null);
  };

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 600,
    height: 200,
    boxShadow: 24,
    p: 4,
    bgcolor: "#fff",
    borderRadius: "10px",
    padding: "15px 30px",
  };

  const editPostButtonStyles = {
    bgcolor: "transparent",
    color: "#000",
    fontSize: "14px",
    fontWeight: "600",
  };

  return (
    <div>
      <Button onClick={handleOpen} sx={editPostButtonStyles}>
        EDIT
      </Button>
      <Modal
        open={open}
        // onClose={() => handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className="edit-post-wrapper">
            <div className="create-a-post-section">
              <img className="logged-in-user-img" src={deven} alt="deven" />
              <div className="create-a-post-wrapper">
                <textarea
                  className="create-a-post-input"
                  value={updatedPost.content}
                  onChange={(e) => {
                    setUpdatedPost({ ...updatedPost, content: e.target.value });
                  }}
                ></textarea>
                <div className="create-a-post-footer-wrapper">
                  <i className="fa-solid fa-image"></i>
                  <div className="d-flex">
                    <button
                      onClick={() => handleClose()}
                      className="discard-modal-button mx-2"
                    >
                      Discard
                    </button>
                    <button
                      onClick={() => {
                        handleEditPost(updatedPost);
                        handleClose();
                      }}
                      className="add-new-post-button"
                    >
                      Update
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
};

export const Home = () => {
  const { usersData } = useContext(ContextUsers);
  const {
    postsData,
    AddPost,
    postContent,
    setPostContent,
    LikePost,
    DislikePost,
    BookmarkPost,
    RemoveBookmarkPost,
    bookmarkPosts,
  } = useContext(ContextPosts);

  const loggedInUser = JSON.parse(localStorage.getItem("user"));

  // For main Home component
  const [usersPosts, setUsersPosts] = useState([]);
  const [sortBy, setSortBy] = useState("latest");

  // sort functionality
  const sortByFunction = (type) => {
    if (type === "trending") {
      const sortByLikes = (data) => {
        return data.sort((a, b) => b?.likes?.likeCount - a?.likes?.likeCount);
      };
      const mostLiked = sortByLikes(postsData);
      setUsersPosts(mostLiked);
      setSortBy("trending");
    } else {
      const sortByCreatedAtDesc = (data) => {
        return data?.sort(
          (a, b) => new Date(b?.createdAt) - new Date(a?.createdAt)
        );
      };
      const latestData = sortByCreatedAtDesc(postsData);
      setUsersPosts(latestData);
      setSortBy("latest");
    }
  };

  useEffect(() => {
    sortByFunction("latest");
  }, [postsData]);

  // helper function to convert the date
  const convertDate = (inputDate) => {
    if (inputDate) {
      const date = new Date(inputDate);
      const options = { month: "short", day: "numeric", year: "numeric" };
      const formattedDate = date.toLocaleString("en-US", options);

      return formattedDate;
    }
  };

  return (
    <div>
      <Navbar />
      <div className="default-page-margin">
        <div className="container">
          <div className="row">
            {/* Quick Links section (left one) */}
            <div className="col-md-3">
              <QuickLinks />
            </div>
            {/* Users Posts sections (middle one) */}
            <div className="col-md-5">
              <div className="users-post-section-wrapper">
                <div className="default-section-block create-a-post-section">
                  <img className="logged-in-user-img" src={deven} alt="deven" />
                  <div className="create-a-post-wrapper">
                    <textarea
                      className="create-a-post-input"
                      placeholder="What's happening?"
                      value={postContent}
                      onChange={(e) => setPostContent(e.target.value)}
                    ></textarea>
                    <div className="create-a-post-footer-wrapper">
                      <i className="fa-solid fa-image"></i>
                      <button
                        onClick={() => AddPost(postContent)}
                        className="add-new-post-button"
                      >
                        Post
                      </button>
                    </div>
                  </div>
                </div>

                <div className="users-posts-section">
                  <div className="default-section-block filters-wrapper">
                    <p
                      style={{
                        fontWeight: `${sortBy === "latest" ? "700" : "400"}`,
                      }}
                      onClick={() => sortByFunction("latest")}
                    >
                      Latest Posts
                    </p>
                    <p
                      style={{
                        fontWeight: `${sortBy === "trending" ? "700" : "400"}`,
                      }}
                      onClick={() => sortByFunction("trending")}
                    >
                      Trending Posts
                    </p>
                  </div>

                  <div className="posts-wrapper">
                    {usersPosts?.map((post) => {
                      return (
                        <div
                          className="default-section-block posts"
                          key={post._id}
                        >
                          <div className="post-user-img">
                            <img src={deven} alt="deven" />
                          </div>
                          <div className="post-details">
                            <div className="post-user-created-date">
                              <p className="post-user-date">
                                {post.firstName} {post.lastName} ·{" "}
                                <span>
                                  {convertDate(post.createdAt) ?? "---"}
                                </span>
                              </p>
                              {post.username === loggedInUser?.username ? (
                                <div className="post-edit-or-delete-options">
                                  <ThreeDots post={post} />
                                </div>
                              ) : (
                                ""
                              )}
                            </div>
                            <p className="post-user-username">
                              @{post.username}
                            </p>
                            <p className="post-user-content">
                              <Link
                                className="post-link"
                                to={`/post/${post._id}`}
                              >
                                {post.content}
                              </Link>
                            </p>
                            <div className="post-call-to-action-buttons">
                              <div className="post-likes-count">
                                {post.likes.likedBy.find(
                                  (likedUser) =>
                                    likedUser.username ===
                                    JSON.parse(localStorage.getItem("user"))
                                      .username
                                ) ? (
                                  <i
                                    className="fa-solid fa-heart"
                                    onClick={() => DislikePost(post._id)}
                                  ></i>
                                ) : (
                                  <i
                                    className="fa-regular fa-heart"
                                    onClick={() => LikePost(post._id)}
                                  ></i>
                                )}
                                <p>
                                  {post.likes.likeCount > 0
                                    ? post.likes.likeCount
                                    : ""}
                                </p>
                              </div>
                              <i className="fa-regular fa-comment"></i>
                              <i className="fa-solid fa-share-nodes"></i>
                              {bookmarkPosts.find(
                                (bookmarkPost) => bookmarkPost._id === post._id
                              ) ? (
                                <i
                                  className="fa-solid fa-bookmark"
                                  onClick={() => RemoveBookmarkPost(post._id)}
                                ></i>
                              ) : (
                                <i
                                  className="fa-regular fa-bookmark"
                                  onClick={() => BookmarkPost(post._id)}
                                ></i>
                              )}
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
            {/* Search box & suggested users (right one) */}
            <div className="col-md-4">
              <SuggestedUsers usersData={usersData} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
