import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { Navbar } from "../../components/Header/Navbar";
import { QuickLinks } from "../../components/QuickLinks/QuickLinks";
import { ContextPosts } from "../../contexts/PostsContext";
import { ContextUsers } from "../../contexts/UsersContext";
import { SuggestedUsers } from "../../components/SuggestedUsers/SuggestedUsers";

import deven from "../../images/deven.jpg";

// Three Dots
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MoreVertIcon from "@mui/icons-material/MoreVert";

// MUI Modal
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";

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

export const SinglePost = () => {
  const { postId } = useParams();
  const {
    postsData,
    BookmarkPost,
    RemoveBookmarkPost,
    bookmarkPosts,
    LikePost,
    DislikePost,
  } = useContext(ContextPosts);
  const { usersData } = useContext(ContextUsers);

  const loggedInUser = JSON.parse(localStorage.getItem("user"));

  const [particularPost, setParticularPost] = useState({});

  useEffect(() => {
    // if (postsData.length > 0) {
    const temp = postsData.find((post) => post._id === postId);
    //   console.log(temp);
    setParticularPost(temp);
    // }
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
                <div className="users-posts-section">
                  <div className="posts-wrapper">
                    <div className="default-section-block posts">
                      <div className="post-user-img">
                        <img src={deven} alt="deven" />
                      </div>
                      <div className="post-details">
                        <div className="post-user-created-date">
                          <p className="post-user-date">
                            {particularPost?.firstName}{" "}
                            {particularPost?.lastName} ·{" "}
                            <span>
                              {convertDate(particularPost?.createdAt) ?? "---"}
                            </span>
                          </p>
                          {particularPost?.username ===
                          loggedInUser?.username ? (
                            <div className="post-edit-or-delete-options">
                              <ThreeDots particularPost={particularPost} />
                            </div>
                          ) : (
                            ""
                          )}
                        </div>
                        <p className="post-user-username">
                          @{particularPost?.username}
                        </p>
                        <p className="post-user-content">
                          {particularPost?.content}
                        </p>
                        <div className="post-call-to-action-buttons">
                          <div className="post-likes-count">
                            {particularPost?.likes?.likedBy?.find(
                              (likedUser) =>
                                likedUser?.username ===
                                JSON.parse(localStorage.getItem("user"))
                                  .username
                            ) ? (
                              <i
                                className="fa-solid fa-heart"
                                onClick={() => DislikePost(particularPost._id)}
                              ></i>
                            ) : (
                              <i
                                className="fa-regular fa-heart"
                                onClick={() => LikePost(particularPost._id)}
                              ></i>
                            )}
                            <p>
                              {particularPost?.likes?.likeCount > 0
                                ? particularPost?.likes?.likeCount
                                : ""}
                            </p>
                          </div>
                          <i className="fa-regular fa-comment"></i>
                          <i className="fa-solid fa-share-nodes"></i>
                          {bookmarkPosts.find(
                            (bookmarkPost) =>
                              bookmarkPost._id === particularPost._id
                          ) ? (
                            <i
                              className="fa-solid fa-bookmark"
                              onClick={() =>
                                RemoveBookmarkPost(particularPost._id)
                              }
                            ></i>
                          ) : (
                            <i
                              className="fa-regular fa-bookmark"
                              onClick={() => BookmarkPost(particularPost._id)}
                            ></i>
                          )}
                        </div>
                      </div>
                    </div>
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
