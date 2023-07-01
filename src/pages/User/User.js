import React, { useContext, useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams, useNavigate } from "react-router-dom";

import { QuickLinks } from "../../components/QuickLinks/QuickLinks";
import { ContextUsers } from "../../contexts/UsersContext";
import { ContextPosts } from "../../contexts/PostsContext";
import { Navbar } from "../../components/Header/Navbar";
import { SuggestedUsers } from "../../components/SuggestedUsers/SuggestedUsers";
import { ReactToastify } from "../../utility/ReactToastify";

// Three Dots
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MoreVertIcon from "@mui/icons-material/MoreVert";

// MUI Modal
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";

import deven from "../../images/deven.jpg";
import "./User.css";

const barbie = "https://i.ibb.co/27T7TWr/barbie.jpg";
const ben10 = "https://i.ibb.co/RNcm4TN/ben10.jpg";
const female = "https://i.ibb.co/BLb6RTT/female.png";
const male = "https://i.ibb.co/d2Z36HF/male.png";
const person1 = "https://i.ibb.co/xz3Fvb3/person-1.jpg";
const person2 = "https://i.ibb.co/FKDz010/person-2.jpg";

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

// Edit Profile Modal
const ProfileModal = ({ userDetails }) => {
  const [open, setOpen] = React.useState(false);
  const [updatedUserDetails, setUpdatedUserDetails] = useState(userDetails);
  const { fetchUsers } = useContext(ContextUsers);

  const token = localStorage.getItem("token"); // login token

  // API Call for Editing a Post
  const handleEditProfile = async (updatedProfile) => {
    try {
      const result = await axios.post(
        `/api/users/edit`,
        {
          userData: updatedProfile,
        },
        {
          headers: {
            authorization: token,
          },
        }
      );
      if (result.status === 201) {
        fetchUsers();
        ReactToastify("Profile Updated", "info");
      }
    } catch (e) {
      console.log(e);
      ReactToastify(`Error: ${e}`, "error");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdatedUserDetails((prev) => ({ ...prev, [name]: value }));
  };

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
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
      {/* <Button >EDIT</Button> */}
      <button
        onClick={handleOpen}
        sx={editPostButtonStyles}
        className="add-new-post-button"
      >
        Edit Profile
      </button>
      <Modal
        open={open}
        // onClose={() => handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className="edit-post-wrapper">
            <div className="create-a-post-section">
              <div className="img-wrapper">
                <img
                  className="logged-in-user-img"
                  src={updatedUserDetails?.avatar}
                  alt={updatedUserDetails?.username}
                />
                <AvatarModal
                  updatedUserDetails={updatedUserDetails}
                  setUpdatedUserDetails={setUpdatedUserDetails}
                />
              </div>
              <div className="create-a-post-wrapper">
                <input
                  type="text"
                  name="bio"
                  placeholder="Enter your bio..."
                  value={updatedUserDetails?.bio}
                  onChange={(e) => handleChange(e)}
                />
                <input
                  type="text"
                  name="website"
                  placeholder="Enter your website..."
                  value={updatedUserDetails?.website}
                  onChange={(e) => handleChange(e)}
                />
                <div className="d-flex">
                  <button
                    onClick={() => handleClose()}
                    className="discard-modal-button mx-2"
                  >
                    Discard
                  </button>
                  <button
                    onClick={() => {
                      handleEditProfile(updatedUserDetails);
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
        </Box>
      </Modal>
    </div>
  );
};

// Edit Avatar Modal
const AvatarModal = ({ setUpdatedUserDetails }) => {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
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
      <i
        className="fa-solid fa-camera camera-icon"
        onClick={handleOpen}
        sx={editPostButtonStyles}
      ></i>
      <Modal
        open={open}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className="avatar-wrapper">
            {[barbie, ben10, female, male, person1, person2].map((img) => (
              <img
                key={img}
                onClick={() => {
                  // handleEditProfile(updatedUserDetails);
                  setUpdatedUserDetails((prev) => ({ ...prev, avatar: img }));
                  handleClose();
                }}
                src={img}
                className="avatar-image"
              />
            ))}
          </div>
          <div className="d-flex">
            <button
              onClick={() => handleClose()}
              className="discard-modal-button mx-2"
            >
              Discard
            </button>
          </div>
        </Box>
      </Modal>
    </div>
  );
};

export const User = () => {
  const navigate = useNavigate();
  const { usersData, followUser, unfollowUser } = useContext(ContextUsers);
  const {
    postsData,
    LikePost,
    DislikePost,
    BookmarkPost,
    RemoveBookmarkPost,
    bookmarkPosts,
  } = useContext(ContextPosts);

  const { userName } = useParams();
  const [userPosts, setUserPosts] = useState([]);
  const [userDetails, setUserDetails] = useState({});

  useEffect(() => {
    const user = usersData.find((user) => user.username === userName);
    setUserDetails(user);
  }, [usersData, userName]);

  const loggedInUser = JSON.parse(localStorage.getItem("user"));

  const fetchUserPosts = async () => {
    try {
      const result = await axios.get(`/api/posts/user/${userName}`);
      if (result.status === 200) {
        setUserPosts(result.data.posts);
      } else {
        setUserPosts([]);
      }
    } catch (error) {
      console.log("err = ", error);
      error?.response?.data?.errors?.map((e) => ReactToastify(e, "error"));
    }
  };

  useEffect(() => {
    fetchUserPosts();
  }, [postsData, userName]);

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
                <div className="default-section-block logged-in-user-details">
                  <img
                    className="logged-in-user-img"
                    src={userDetails?.avatar}
                    alt={userDetails?.username}
                  />
                  <div className="user-profile-details">
                    <div className="logged-in-user-name">
                      <p>
                        {userDetails?.firstName} {userDetails?.lastName}
                      </p>
                      <div className="user-action-buttons">
                        {loggedInUser?.username === userDetails?.username ? (
                          <>
                            <ProfileModal userDetails={userDetails} />
                            <i
                              onClick={() => {
                                localStorage.clear();
                                navigate("/");
                              }}
                              className="fa-solid fa-right-from-bracket logout-icon"
                            ></i>
                          </>
                        ) : usersData
                            ?.find(
                              (user) => user.username === loggedInUser?.username
                            )
                            ?.following?.find(
                              (followingUser) =>
                                followingUser.username === userDetails?.username
                            ) ? (
                          <button
                            onClick={() => unfollowUser(userDetails._id)}
                            className="add-new-post-button"
                          >
                            Unfollow
                          </button>
                        ) : (
                          <button
                            onClick={() => followUser(userDetails._id)}
                            className="add-new-post-button"
                          >
                            Follow
                          </button>
                        )}
                      </div>
                    </div>
                    <p className="username">@{userDetails?.username}</p>
                    <p className="user-bio">{userDetails?.bio}</p>
                    <Link
                      to={`${userDetails?.website}`}
                      target="_blank"
                      className="website"
                    >
                      {userDetails?.website}
                    </Link>
                    <div className="logged-in-user-info">
                      <p>
                        {
                          postsData.filter(
                            (post) => post.username === userDetails?.username
                          ).length
                        }{" "}
                        Posts
                      </p>
                      <p>{userDetails?.followers?.length} Followers</p>
                      <p>{userDetails?.following?.length} Following</p>
                    </div>
                  </div>
                </div>
                <div className="posts-wrapper">
                  {userPosts?.map((post) => {
                    const currrentPostUserAvatar = usersData.find(
                      (user) => user.username === post?.username
                    )?.avatar;
                    return (
                      <div
                        className="default-section-block posts"
                        key={post._id}
                      >
                        <div className="post-user-img">
                          <img
                            src={currrentPostUserAvatar}
                            alt={post?.username}
                          />
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
                          <div className="post-user-username">
                            @{post.username}
                          </div>
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
