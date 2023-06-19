import React, { useContext, useState, useEffect } from "react";

import { QuickLinks } from "../../components/QuickLinks/QuickLinks";
import { ContextUsers } from "../../contexts/UsersContext";
import { ContextPosts } from "../../contexts/PostsContext";
import { Navbar } from "../../components/Header/Navbar";

// Three Dots
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MoreVertIcon from "@mui/icons-material/MoreVert";

// MUI Modal
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

import "./Home.css";

import deven from "../../images/deven.jpg";

// Three Dots
const ThreeDots = ({ post }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    console.log("post in Three dots = ", post);
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
          // PaperProps={{
          //   style: {
          //     width: "",
          //   },
          // }}
        >
          <MenuItem>
            {/*  onClick={handleClose} */}
            {/* <button>Delete</button> */}
            <BasicModal post={post} setAnchorEl={setAnchorEl} />
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <button>Delete</button>
          </MenuItem>
        </Menu>
      </div>
    </>
  );
};

// Post Edit Modal
const BasicModal = ({ setAnchorEl, post }) => {
  const [open, setOpen] = React.useState(false);

  const [updatedPost, setUpdatedPost] = useState({});

  const handleOpen = () => {
    console.log("post in Basic modal = ", post);
    setOpen(true);
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
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  return (
    <div>
      <Button onClick={handleOpen}>Edit Post</Button>
      <Modal
        open={open}
        // onClose={() => handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className="edit-post-wrapper">
            <div className="profile-form-group">
              <p className="form-label">Update Post Content:</p>
              <input
                type="text"
                required
                // value={newAddress.street}
                // onChange={(e) => handleChange(e)}
                id="street"
              />
            </div>
          </div>

          <button onClick={() => handleClose()}>Discard</button>
          <button
            onClick={() => {
              console.log("Saved changes");
              handleClose();
            }}
          >
            Update
          </button>
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
    const date = new Date(inputDate);
    const options = { month: "short", day: "numeric", year: "numeric" };
    const formattedDate = date.toLocaleString("en-US", options);

    return formattedDate;
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
                              <div className="post-edit-or-delete-options">
                                <ThreeDots post={post} />
                              </div>
                            </div>
                            <p className="post-user-username">
                              @{post.username}
                            </p>
                            <p className="post-user-content">{post.content}</p>
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
              <div className="suggested-users-wrapper">
                <div className="default-section-block">
                  <div className="search-bar">
                    <input
                      type="text"
                      className="search-box"
                      placeholder="Search Posts, Users..."
                    />
                    <i className="fa-solid fa-magnifying-glass"></i>
                  </div>
                </div>
                <div className="default-section-block">
                  <div className="suggested-users">
                    <p className="title">Suggested Users</p>
                    {usersData?.map((user) => {
                      return (
                        <div key={user._id} className="individual-user">
                          <img
                            className="suggested-users-img"
                            src={deven}
                            alt="deven"
                          />
                          <div>
                            <p className="name">
                              {user.firstName} {user.lastName}
                            </p>
                            <p className="username">@{user.username}</p>
                          </div>
                          <button className="follow-button">
                            Follow
                            <div className="arrow-wrapper">
                              <div className="arrow"></div>
                            </div>
                          </button>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
