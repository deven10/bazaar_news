import React, { useContext, useState, useEffect } from "react";
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";

import { QuickLinks } from "../../components/QuickLinks/QuickLinks";
import { ContextUsers } from "../../contexts/UsersContext";
import { ContextPosts } from "../../contexts/PostsContext";
import { Navbar } from "../../components/Header/Navbar";

import "./Home.css";

import deven from "../../images/deven.jpg";

export const Home = () => {
  const { usersData } = useContext(ContextUsers);
  const { postsData } = useContext(ContextPosts);

  console.log("posts = ", postsData);
  const [usersPosts, setUsersPosts] = useState([]);

  const [anchorEl, setAnchorEl] = useState(null);

  const [sortBy, setSortBy] = useState("");

  useEffect(() => {
    if (sortBy === "latest") {
      function sortByCreatedAtDesc(data) {
        return data?.sort(
          (a, b) => new Date(b?.createdAt) - new Date(a?.createdAt)
        );
      }
      const sortedData = sortByCreatedAtDesc(postsData);
      setUsersPosts(sortedData);
    } else if (sortBy === "trending") {
      function sortByLikes(data) {
        return data.sort((a, b) => b?.likes?.likeCount - a?.likes?.likeCount);
      }
      const sortedData = sortByLikes(postsData);
      setUsersPosts(sortedData);
    } else {
      setUsersPosts(postsData);
    }
  }, [sortBy, postsData, anchorEl]);

  const convertDate = (inputDate) => {
    const date = new Date(inputDate);
    const options = { month: "short", day: "numeric", year: "numeric" };
    const formattedDate = date.toLocaleString("en-US", options);

    return formattedDate;
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const uniqueID = open ? "simple-popover" : undefined;

  const PopOver = () => {
    return (
      <div>
        <i
          className="fa-solid fa-filter"
          aria-describedby={uniqueID}
          // variant="contained"
          onClick={handleClick}
        ></i>
        <Popover
          id={uniqueID}
          open={open}
          anchorEl={anchorEl}
          onClose={handleClose}
          // anchorOrigin={{
          //   vertical: "bottom",
          //   horizontal: "left",
          // }}
        >
          <Typography sx={{ p: 2 }}>
            <p
              className="popover-p"
              onClick={() => {
                setSortBy("latest");
                handleClick();
              }}
            >
              Latest Posts
            </p>
            <p
              className="popover-p"
              onClick={() => {
                setSortBy("trending");
                handleClose();
              }}
            >
              Trending Posts
            </p>
          </Typography>
        </Popover>
      </div>
    );
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
                    ></textarea>
                    <div className="create-a-post-footer-wrapper">
                      <i className="fa-solid fa-image"></i>
                      <button className="add-new-post-button">Post</button>
                    </div>
                  </div>
                </div>

                <div className="users-posts-section">
                  <div className="default-section-block filters-wrapper">
                    <p>
                      {sortBy === "latest"
                        ? "Latest Posts"
                        : sortBy === "trending"
                        ? "Trending Posts"
                        : ""}
                    </p>
                    {/* <i className="fa-solid fa-filter"></i> */}
                    <div className="popover-mui">
                      <PopOver />
                    </div>
                  </div>

                  <div className="posts-wrapper">
                    {usersPosts?.map((post) => {
                      console.log();
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
                                ...
                              </div>
                            </div>
                            <p className="post-user-username">
                              @{post.username}
                            </p>
                            <p className="post-user-content">{post.content}</p>
                            <div className="post-call-to-action-buttons">
                              <div className="post-likes-count">
                                <i className="fa-regular fa-heart"></i>{" "}
                                <p>
                                  {post.likes.likeCount > 0
                                    ? post.likes.likeCount
                                    : ""}
                                </p>
                              </div>
                              <i className="fa-regular fa-comment"></i>
                              <i className="fa-solid fa-share-nodes"></i>
                              <i className="fa-regular fa-bookmark"></i>
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
                    {/* <div className="individual-user">
                      <img
                        className="suggested-users-img"
                        src={deven}
                        alt="deven"
                      />
                      <div>
                        <p className="name">Tanay Pratap</p>
                        <p className="username">@pratap_tanay</p>
                      </div>
                      <button className="follow-button">
                        Follow
                        <div className="arrow-wrapper">
                          <div className="arrow"></div>
                        </div>
                      </button>
                    </div>
                    <div className="individual-user">
                      <img
                        className="suggested-users-img"
                        src={deven}
                        alt="deven"
                      />
                      <div>
                        <p className="name">Tanay Pratap</p>
                        <p className="username">@pratap_tanay</p>
                      </div>
                      <button className="follow-button">
                        Follow
                        <div className="arrow-wrapper">
                          <div className="arrow"></div>
                        </div>
                      </button>
                    </div>
                    <div className="individual-user">
                      <img
                        className="suggested-users-img"
                        src={deven}
                        alt="deven"
                      />
                      <div>
                        <p className="name">Tanay Pratap</p>
                        <p className="username">@pratap_tanay</p>
                      </div>
                      <button className="follow-button">
                        Follow
                        <div className="arrow-wrapper">
                          <div className="arrow"></div>
                        </div>
                      </button>
                    </div> */}
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
